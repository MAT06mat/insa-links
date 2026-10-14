export function getDomainFromUrl(url: string): string {
    try {
        const parsed = new URL(url);
        return parsed.origin;
    } catch {
        return url;
    }
}

export function getLinkIconCandidateUrls(
    item: { url: string; icon?: string; iconDirectUrl?: string },
    size = 128,
): string[] {
    const urls: string[] = [];

    if (item.iconDirectUrl) {
        urls.push(item.iconDirectUrl);
        return urls;
    }

    const target = item.icon || item.url;
    const domain = getDomainFromUrl(target);

    // Primary: Google Favicon V2 with fallback_opts (size=128 pulls apple-touch-icon / PWA manifest icon if available)
    urls.push(
        `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
            domain,
        )}&size=${size}`,
    );

    // Secondary fallback: Google S2 service
    urls.push(
        `https://www.google.com/s2/favicons?domain=${encodeURIComponent(
            domain,
        )}&sz=${size}`,
    );

    // Hierarchical fallbacks: 64 and 32 if higher resolution was requested
    if (size > 64) {
        urls.push(
            `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
                domain,
            )}&size=64`,
        );
    }
    if (size !== 32) {
        urls.push(
            `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
                domain,
            )}&size=32`,
        );
    }

    return urls;
}

export function getLinkIconSrc(
    item: { url: string; icon?: string; iconDirectUrl?: string },
    size = 128,
): string {
    const candidates = getLinkIconCandidateUrls(item, size);
    return candidates[0] || "";
}
