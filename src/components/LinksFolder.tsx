import { useState } from "react";
import type { LinksFolderProps } from "../types/LinksFolderProps";
import ItemList from "./ItemList";

function LinksFolder({ text, list }: LinksFolderProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"links-folder" + (isOpen ? " open" : "")}>
            <button
                className="dropdown"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span>{text}</span>
                <img className="chevron" src="/chevron-right.svg" />
            </button>
            <div className="links-wrapper">
                <ItemList list={list} />
            </div>
        </div>
    );
}

export default LinksFolder;
