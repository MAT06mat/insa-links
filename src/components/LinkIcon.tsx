import { useState, useEffect } from "react";
import { getLinkIconCandidateUrls } from "../utils/linkUtils";

interface LinkIconProps {
    url: string;
    text: string;
    icon?: string;
    iconDirectUrl?: string;
    roundIcon?: boolean;
    size?: number;
    className?: string;
}

export function LinkIcon({
    url,
    text,
    icon,
    iconDirectUrl,
    roundIcon,
    size = 128,
    className = "",
}: LinkIconProps) {
    const [candidateIndex, setCandidateIndex] = useState(0);

    // Reset candidate index whenever item identifiers change
    useEffect(() => {
        setCandidateIndex(0);
    }, [url, icon, iconDirectUrl, size]);

    const candidates = getLinkIconCandidateUrls(
        { url, icon, iconDirectUrl },
        size
    );

    const currentSrc = candidates[candidateIndex];

    if (!currentSrc || candidateIndex >= candidates.length) {
        const firstLetter = text ? text.trim().charAt(0).toUpperCase() : "?";
        return (
            <div
                className={`icon-fallback ${roundIcon ? "round-icon" : ""} ${className}`}
                aria-hidden="true"
            >
                <span>{firstLetter}</span>
            </div>
        );
    }

    return (
        <img
            src={currentSrc}
            alt=""
            loading="lazy"
            className={`icon-img ${roundIcon ? "round-icon" : ""} ${className}`}
            onError={() => setCandidateIndex((prev) => prev + 1)}
        />
    );
}

export default LinkIcon;
