'use client';

import { useEffect, useState, useRef } from 'react';
import { Heart, Share2, Link2, Linkedin, Twitter, MessageCircle, Check } from 'lucide-react';
import { supabase, engagementId, type EngagementPageType } from '@/lib/supabase';
import styles from './EngagementBar.module.css';

interface EngagementBarProps {
    pageType: EngagementPageType;
    slug: string;
    title: string;
}

export default function EngagementBar({ pageType, slug, title }: EngagementBarProps) {
    const id = engagementId(pageType, slug);
    const likeStorageKey = `engagement:liked:${id}`;

    const [likes, setLikes] = useState<number | null>(null);
    const [shares, setShares] = useState<number | null>(null);
    const [liked, setLiked] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLiked(typeof window !== 'undefined' && window.localStorage.getItem(likeStorageKey) === '1');

        if (!supabase) return;
        supabase
            .from('portfolio_engagement')
            .select('likes, shares')
            .eq('id', id)
            .maybeSingle()
            .then(({ data }) => {
                setLikes(data?.likes ?? 0);
                setShares(data?.shares ?? 0);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setShareOpen(false);
            }
        }
        if (shareOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [shareOpen]);

    const handleLike = async () => {
        const nextLiked = !liked;
        setLiked(nextLiked);
        setLikes((prev) => Math.max((prev ?? 0) + (nextLiked ? 1 : -1), 0));
        window.localStorage.setItem(likeStorageKey, nextLiked ? '1' : '0');

        if (!supabase) return;
        const { data, error } = await supabase.rpc('set_portfolio_like', {
            p_id: id,
            p_page_type: pageType,
            p_slug: slug,
            p_liked: nextLiked,
        });
        if (error) return;
        const row = Array.isArray(data) ? data[0] : data;
        if (row) setLikes(row.likes);
    };

    const getShareUrl = () => `https://thariqhamad.com/${pageType === 'blog' ? 'blog' : 'projects'}/${slug}/`;

    const trackShare = async () => {
        setShares((prev) => (prev ?? 0) + 1);
        if (!supabase) return;
        const { data, error } = await supabase.rpc('increment_portfolio_share', {
            p_id: id,
            p_page_type: pageType,
            p_slug: slug,
        });
        if (error) return;
        const row = Array.isArray(data) ? data[0] : data;
        if (row) setShares(row.shares);
    };

    const shareTo = (platform: 'x' | 'linkedin' | 'whatsapp') => {
        const url = encodeURIComponent(getShareUrl());
        const text = encodeURIComponent(title);
        const links: Record<typeof platform, string> = {
            x: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            whatsapp: `https://wa.me/?text=${text}%20${url}`,
        };
        window.open(links[platform], '_blank', 'noopener,noreferrer');
        trackShare();
        setShareOpen(false);
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(getShareUrl());
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // clipboard unavailable, ignore
        }
        trackShare();
    };

    return (
        <div className={styles.bar}>
            <button
                type="button"
                className={`${styles.pill} ${liked ? styles.pillActive : ''}`}
                onClick={handleLike}
                aria-pressed={liked}
                aria-label={liked ? 'Unlike' : 'Like'}
            >
                <Heart size={16} className={liked ? styles.heartFilled : ''} />
                <span>{likes === null ? '–' : likes}</span>
            </button>

            <div className={styles.shareWrap} ref={menuRef}>
                <button
                    type="button"
                    className={styles.pill}
                    onClick={() => setShareOpen((v) => !v)}
                    aria-expanded={shareOpen}
                    aria-label="Share"
                >
                    <Share2 size={16} />
                    <span>{shares === null ? '–' : shares}</span>
                </button>

                {shareOpen && (
                    <div className={styles.menu} role="menu">
                        <button type="button" className={styles.menuItem} onClick={() => shareTo('x')}>
                            <Twitter size={15} /> Share on X
                        </button>
                        <button type="button" className={styles.menuItem} onClick={() => shareTo('linkedin')}>
                            <Linkedin size={15} /> Share on LinkedIn
                        </button>
                        <button type="button" className={styles.menuItem} onClick={() => shareTo('whatsapp')}>
                            <MessageCircle size={15} /> Share on WhatsApp
                        </button>
                        <button type="button" className={styles.menuItem} onClick={copyLink}>
                            {copied ? <Check size={15} /> : <Link2 size={15} />}
                            {copied ? 'Copied' : 'Copy link'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
