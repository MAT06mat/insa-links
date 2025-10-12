import type { LinkProps } from "../types/LinkProps";

function Link({ text, url, icon, iconDirectUrl, roundIcon }: LinkProps) {
    const src =
        iconDirectUrl ||
        `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&url=${
            icon || url
        }&size=32`;

    const iconClassName = "icon" + (roundIcon ? " round-icon" : "");

    return (
        <div className="link">
            <a href={url} target="_blank">
                <img src={src} className={iconClassName} title={text} />
                <div className="text">{text}</div>
            </a>
        </div>
    );
}

export default Link;
