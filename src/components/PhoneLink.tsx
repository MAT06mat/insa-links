import type { LinkProps } from "../types/LinkProps";
import LinkIcon from "./LinkIcon";

interface PhoneLinkProps {
    link: LinkProps;
}

export function PhoneLink({ link }: PhoneLinkProps) {
    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="phone-item phone-link-item"
            title={link.text}
        >
            <div className="phone-app-icon-squircle">
                <LinkIcon
                    url={link.url}
                    text={link.text}
                    icon={link.icon}
                    iconDirectUrl={link.iconDirectUrl}
                    roundIcon={link.roundIcon}
                    size={64}
                    className="app-main-icon"
                />
            </div>
            <div className="phone-app-label-wrapper">
                <span className="phone-app-name">{link.text}</span>
            </div>
        </a>
    );
}

export default PhoneLink;
