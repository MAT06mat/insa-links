import { useState } from "react";
import type { FolderProps } from "../types/FolderProps";
import ItemList from "./ItemList";
import ChevronRight from "../assets/svg/chevron-right";
import FolderIcon from "../assets/svg/FolderIcon";

function Folder({ text, list }: FolderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const count = list.length;

    return (
        <div className={`folder ${isOpen ? "open" : ""}`}>
            <button
                type="button"
                className="dropdown"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
            >
                <div className="folder-header-left">
                    <FolderIcon className="folder-svg-icon" />
                    <span className="folder-title">{text}</span>
                    <span className="folder-badge">
                        {count} {count > 1 ? "liens" : "lien"}
                    </span>
                </div>
                <div className="folder-header-right">
                    <ChevronRight />
                </div>
            </button>
            <div className="list-wrapper">
                <ItemList list={list} viewMode="list" />
            </div>
        </div>
    );
}

export default Folder;
