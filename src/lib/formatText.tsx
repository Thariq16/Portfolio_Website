import React from 'react';

export function formatText(text: string): React.ReactNode {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    const textWithLinks = text.replace(linkRegex, '___LINK_START___$1___LINK_SEP___$2___LINK_END___');
    const segments = textWithLinks.split(/(___LINK_START___.*?___LINK_END___)/g);

    return segments.map((segment, index) => {
        if (segment.startsWith('___LINK_START___')) {
            const linkMatch = segment.match(/___LINK_START___(.*)___LINK_SEP___(.*)___LINK_END___/);
            if (linkMatch) {
                return (
                    <a
                        key={index}
                        href={linkMatch[2]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-primary/80"
                    >
                        {linkMatch[1]}
                    </a>
                );
            }
        }
        const boldParts = segment.split(/(\*\*.*?\*\*)/g);
        return boldParts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={`${index}-${i}`} className="font-bold text-primary">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    });
}
