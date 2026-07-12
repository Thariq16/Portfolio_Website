'use client';

import React, { useState, useMemo } from 'react';
import styles from './page.module.css';
import { POSTS } from './data';

export default function ContentCalendarPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [track, setTrack] = useState('');
  const [pillar, setPillar] = useState('');
  const [status, setStatus] = useState('');
  const [format, setFormat] = useState('');
  const [sort, setSort] = useState('order');
  const [search, setSearch] = useState('');
  
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggleExpand = (num: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  };

  const clearFilters = () => {
    setTrack('');
    setPillar('');
    setStatus('');
    setFormat('');
    setSort('order');
    setSearch('');
  };

  const trackCounts: Record<string, number> = {};
  const pillarCounts: Record<string, number> = {};
  const statusCounts: Record<string, number> = {};

  POSTS.forEach((p: any) => {
    if (p.track) trackCounts[p.track] = (trackCounts[p.track] || 0) + 1;
    if (p.pillar) pillarCounts[p.pillar] = (pillarCounts[p.pillar] || 0) + 1;
    if (p.status) statusCounts[p.status] = (statusCounts[p.status] || 0) + 1;
  });

  const filteredPosts = useMemo(() => {
    let result = POSTS.filter((p: any) => {
      if (track && p.track !== track) return false;
      if (pillar && p.pillar !== pillar) return false;
      if (status && p.status !== status) return false;
      if (format && p.format !== format) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!(p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q))) return false;
      }
      return true;
    });

    if (sort === 'score-desc') {
      result.sort((a: any, b: any) => b.score - a.score);
    } else if (sort === 'score-asc') {
      result.sort((a: any, b: any) => a.score - b.score);
    } else if (sort === 'date') {
      result.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      // order
      result.sort((a: any, b: any) => a.num - b.num);
    }
    return result;
  }, [track, pillar, status, format, sort, search]);

  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <header className={styles.topHeader}>
          <h1>Builder Thariq — Content Calendar</h1>
          <p className={styles.sub}>
            All 23 drafted posts (Jul 7 – Aug 27, 2026) in one filterable view. Scores are
            a relative editorial read on hook strength, strategic fit, and real-world readiness across
            this batch — not an engagement prediction. Tap any card to read the full draft.
          </p>
          <div className={styles.stats}>
            {Object.entries(trackCounts).map(([k, v]) => (
              <div className={styles.stat} key={`track-${k}`}>
                <div className={styles.num}>{v}</div>
                <div className={styles.label}>{k}</div>
              </div>
            ))}
            {Object.entries(statusCounts).map(([k, v]) => (
              <div className={styles.stat} key={`status-${k}`}>
                <div className={styles.num}>{v}</div>
                <div className={styles.label}>{k}</div>
              </div>
            ))}
          </div>
          <div className={styles.scoreLegend}>
            <b>Score (1–10):</b> weighted read on hook strength/specificity, fit with the 5 content
            pillars, and readiness (fully verified & cleared vs. still a skeleton or not yet
            cleared for posting). <b>Status:</b> Ready = drafted and cleared · Skeleton = needs your
            input before it's real · Not Cleared = drafted but you've said it needs more time.
            <b>📷 icon</b> = this post got an image/carousel recommendation.
          </div>
        </header>

        <div className={styles.filterbar}>
          <button className={styles.filterToggle} onClick={() => setFilterOpen(!filterOpen)}>
            <span>Filters & Search</span><span>{filterOpen ? '▴' : '▾'}</span>
          </button>
          <div className={`${styles.filterGrid} ${filterOpen ? styles.open : ''}`}>
            <div>
              <label>Track</label>
              <select value={track} onChange={e => setTrack(e.target.value)}>
                <option value="">All tracks</option>
                {Object.keys(trackCounts).map(k => <option key={k} value={k}>{k}</option>)}
              </select>
            </div>
            <div>
              <label>Pillar</label>
              <select value={pillar} onChange={e => setPillar(e.target.value)}>
                <option value="">All pillars</option>
                {Object.keys(pillarCounts).map(k => <option key={k} value={k}>{k}</option>)}
              </select>
            </div>
            <div>
              <label>Status</label>
              <select value={status} onChange={e => setStatus(e.target.value)}>
                <option value="">All statuses</option>
                {Object.keys(statusCounts).map(k => <option key={k} value={k}>{k}</option>)}
              </select>
            </div>
            <div>
              <label>Format</label>
              <select value={format} onChange={e => setFormat(e.target.value)}>
                <option value="">All formats</option>
                {Array.from(new Set(POSTS.map((p: any) => p.format))).filter(Boolean).map(k => <option key={k as string} value={k as string}>{k as string}</option>)}
              </select>
            </div>
            <div>
              <label>Sort by</label>
              <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="order">Post order</option>
                <option value="score-desc">Score (high → low)</option>
                <option value="score-asc">Score (low → high)</option>
                <option value="date">Date</option>
              </select>
            </div>
            <div style={{ gridColumn: 'span 1' }}>
              <label>Search</label>
              <input type="search" placeholder="Search title or body…" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <button className={styles.clearBtn} onClick={clearFilters}>Clear filters</button>
          </div>
        </div>

        <div className={styles.resultsCount}>
          {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} matched
        </div>

        {filteredPosts.length === 0 ? (
          <div className={styles.emptyState}>No posts match these filters.</div>
        ) : (
          <div className={styles.grid}>
            {filteredPosts.map((p: any) => {
              const isOpen = expanded.has(p.num);
              return (
                <div key={p.num} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.postNum}>Post {p.num}</div>
                    <div className={styles.datetime}>
                      <div className={styles.d}>{p.date}</div>
                      <div>{p.time}</div>
                    </div>
                  </div>
                  <div className={styles.badges}>
                    <span className={`${styles.badge} ${p.track === 'Builder' ? styles.bTrackBuilder : styles.bTrackAnalyst}`}>{p.track}</span>
                    {p.pillar && <span className={`${styles.badge} ${styles.bPillar}`}>{p.pillar}</span>}
                    <span className={`${styles.badge} ${
                      p.status === 'Ready' ? styles.bStatusReady :
                      p.status === 'Skeleton' ? styles.bStatusSkeleton : styles.bStatusNotCleared
                    }`}>{p.status}</span>
                    <span className={`${styles.badge} ${styles.bFormat}`}>{p.format}</span>
                    {p.image ? (
                      <span className={`${styles.badge} ${styles.bImage}`}>📷 Image recommended</span>
                    ) : (
                      <span className={`${styles.badge} ${styles.bImage}`}>✎ Text-only</span>
                    )}
                    <span className={styles.scoreWrap}>
                      <span className={`${styles.scoreCircle} ${
                        p.score >= 8 ? styles.scoreHigh :
                        p.score >= 6 ? styles.scoreMid : styles.scoreLow
                      }`}>{p.score}</span>
                    </span>
                  </div>
                  <h3>{p.title}</h3>
                  <div className={styles.scoreWhy}>{p.why}</div>
                  
                  {!isOpen && (
                    <div className={styles.preview}>
                      {p.body.trim().split(/\n\n+/)[0]}
                    </div>
                  )}

                  {isOpen && (
                    <div className={styles.fullBody}>
                      {p.body.split(/\n\n+/).map((para: string, i: number) => <p key={i}>{para}</p>)}
                      
                      {p.links && p.links.length > 0 && (
                        <div className={styles.links}>
                          <strong>Sources:</strong>
                          <ul>
                            {p.links.map((l: string[], i: number) => (
                              <li key={i}><a href={l[1]} target="_blank" rel="noopener noreferrer">{l[0]}</a></li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {p.hashtags && <div className={styles.hashtags}>{p.hashtags}</div>}
                      
                      {p.diff && p.diff.length > 0 && (
                        <div className={styles.diffBox}>
                          <div className={styles.diffTitle}>Editorial Changes</div>
                          {p.diff.map((d: string[], i: number) => (
                            <div key={i} className={styles.diffPair}>
                              <div className={styles.diffBefore}><span className={styles.diffLabel}>Was:</span> {d[0]}</div>
                              <div className={styles.diffAfter}><span className={styles.diffLabel}>Now:</span> {d[1]}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {p.note && <div className={styles.note}>{p.note}</div>}
                    </div>
                  )}

                  <button className={styles.toggleBtn} onClick={() => toggleExpand(p.num)}>
                    {isOpen ? 'Show less ▲' : 'Read full draft ▼'}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <footer className={styles.pageFooter}>
          Source: <code>builder-thariq/linkedin-posts-month-1-july-2026.md</code> and
          <code>analyst-thariq/linkedin-crossover-posts.md</code>. Posting window for all Builder posts
          (1–20): 8:00–10:00 AM AST (Riyadh), Sun/Tue/Thu. Posts 21–23 (Analyst Thariq crossover) are
          logged here but marked Not Cleared — do not post without revisiting first.
        </footer>
      </div>
    </div>
  );
}
