import { useEffect } from "react";
import type { FolderProps } from "../types/FolderProps";
import type { LinkProps } from "../types/LinkProps";
import LinkIcon from "./LinkIcon";
import CloseIcon from "../assets/svg/CloseIcon";
import FolderIcon from "../assets/svg/FolderIcon";
import ExternalLinkIcon from "../assets/svg/ExternalLinkIcon";

interface FolderModalProps {
    isOpen: boolean;
    folder: FolderProps | null;
    onClose: () => void;
}

export function FolderModal({ isOpen, folder, onClose }: FolderModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen || !folder) return null;

    // Filter to link items (handle any nested items safely)
    const links: LinkProps[] = folder.list.filter(
        (item): item is LinkProps => item.type === "link",
    );

    const handleOpenAll = () => {
        links.forEach((link) => {
            window.open(link.url, "_blank", "noopener,noreferrer");
        });
    };

    return (
        <div
            className="folder-modal-overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-folder-title"
        >
            <div
                className="folder-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="folder-modal-header">
                    <div className="folder-modal-title-group">
                        <div className="folder-modal-icon-badge">
                            <FolderIcon />
                        </div>
                        <div>
                            <h3
                                id="modal-folder-title"
                                className="folder-modal-title"
                            >
                                {folder.text}
                            </h3>
                            <span className="folder-modal-count">
                                {links.length}{" "}
                                {links.length > 1 ? "liens" : "lien"}
                            </span>
                        </div>
                    </div>

                    <div className="folder-modal-actions">
                        {links.length > 1 && (
                            <button
                                type="button"
                                className="folder-modal-open-all"
                                onClick={handleOpenAll}
                                title="Ouvrir tous les liens de ce dossier dans de nouveaux onglets"
                            >
                                <ExternalLinkIcon />
                                <span>Tout ouvrir</span>
                            </button>
                        )}
                        <button
                            type="button"
                            className="folder-modal-close"
                            onClick={onClose}
                            aria-label="Fermer"
                        >
                            <CloseIcon />
                        </button>
                    </div>
                </div>

                <div className="folder-modal-grid">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="phone-app-card"
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
                                <span className="phone-app-name">
                                    {link.text}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FolderModal;
