import type { LinkProps } from "../types/LinkProps";

function Link({ text, url, icon, iconDirectUrl }: LinkProps) {
    const src =
        iconDirectUrl ||
        `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&url=${
            icon || url
        }&size=32`;

    return (
        <div className="link">
            <a href={url} target="_blank">
                <img src={src} className="icon" />
                <div className="text">{text}</div>
            </a>
        </div>
    );
}

export default Link;
