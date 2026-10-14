import type { FolderProps } from "../types/FolderProps";
import type { LinkProps } from "../types/LinkProps";
import LinkIcon from "./LinkIcon";

interface PhoneFolderProps {
    folder: FolderProps;
    onOpen: (folder: FolderProps) => void;
}

export function PhoneFolder({ folder, onOpen }: PhoneFolderProps) {
    const links = folder.list.filter(
        (item): item is LinkProps => item.type === "link",
    );

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(folder);
        }
    };

    return (
        <div
            className="phone-item phone-folder-item"
            role="button"
            tabIndex={0}
            onClick={() => onOpen(folder)}
            onKeyDown={handleKeyDown}
            aria-label={`Dossier ${folder.text}, ${links.length} liens`}
            title={`Ouvrir le dossier "${folder.text}" (${links.length} liens)`}
        >
            <div className="phone-folder-squircle">
                <div className="phone-folder-mini-grid">
                    {links.slice(0, 9).map((link, idx) => (
                        <div key={idx} className="phone-folder-mini-slot">
                            <LinkIcon
                                url={link.url}
                                text={link.text}
                                icon={link.icon}
                                iconDirectUrl={link.iconDirectUrl}
                                roundIcon={link.roundIcon}
                                size={32}
                                className="phone-folder-mini-icon"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="phone-app-label-wrapper">
                <span className="phone-app-name">{folder.text}</span>
            </div>
        </div>
    );
}

export default PhoneFolder;
