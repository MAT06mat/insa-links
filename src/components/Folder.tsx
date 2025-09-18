import { useState } from "react";
import type { FolderProps } from "../types/FolderProps";
import ItemList from "./ItemList";

function Folder({ text, list }: FolderProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"folder" + (isOpen ? " open" : "")}>
            <button
                className="dropdown"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span>{text}</span>
                <img className="chevron" src="./chevron-right.svg" />
            </button>
            <div className="list-wrapper">
                <ItemList list={list} />
            </div>
        </div>
    );
}

export default Folder;
