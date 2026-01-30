'use client';

import React from 'react';

interface PersonSchemaProps {
    name: string;
    jobTitle: string;
    description: string;
    url: string;
    image?: string;
    sameAs?: string[];
    worksFor?: {
        name: string;
        url?: string;
    }[];
}

export function PersonSchema({
    name,
    jobTitle,
    description,
    url,
    image,
    sameAs = [],
    worksFor = [],
}: PersonSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name,
        jobTitle,
        description,
        url,
        image,
        sameAs,
        worksFor: worksFor.map((org) => ({
            '@type': 'Organization',
            name: org.name,
            url: org.url,
        })),
        knowsAbout: [
            'Product Management',
            'SaaS',
            'AI Products',
            'Revenue Growth',
            'Go-to-Market Strategy',
            'User Experience',
            'Data Analytics',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ArticleSchemaProps {
    title: string;
    description: string;
    url: string;
    author: string;
    datePublished?: string;
    dateModified?: string;
    image?: string;
    publisher?: {
        name: string;
        logo?: string;
    };
}

export function ArticleSchema({
    title,
    description,
    url,
    author,
    datePublished,
    dateModified,
    image,
    publisher,
}: ArticleSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url,
        author: {
            '@type': 'Person',
            name: author,
        },
        datePublished: datePublished || new Date().toISOString(),
        dateModified: dateModified || new Date().toISOString(),
        image,
        publisher: publisher
            ? {
                '@type': 'Organization',
                name: publisher.name,
                logo: publisher.logo
                    ? {
                        '@type': 'ImageObject',
                        url: publisher.logo,
                    }
                    : undefined,
            }
            : undefined,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface WebsiteSchemaProps {
    name: string;
    url: string;
    description: string;
}

export function WebsiteSchema({ name, url, description }: WebsiteSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name,
        url,
        description,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${url}/projects?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
