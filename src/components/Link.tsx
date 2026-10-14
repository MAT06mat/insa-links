import type { LinkProps } from "../types/LinkProps";
import LinkIcon from "./LinkIcon";
import ExternalLinkIcon from "../assets/svg/ExternalLinkIcon";

function Link({ text, url, icon, iconDirectUrl, roundIcon }: LinkProps) {
    return (
        <div className="link">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
                title={text}
            >
                <div className="link-icon-wrapper">
                    <LinkIcon
                        url={url}
                        text={text}
                        icon={icon}
                        iconDirectUrl={iconDirectUrl}
                        roundIcon={roundIcon}
                        size={48}
                        className="link-main-icon"
                    />
                </div>
                <div className="text">{text}</div>
                <div className="link-external-hint">
                    <ExternalLinkIcon />
                </div>
            </a>
        </div>
    );
}

export default Link;
