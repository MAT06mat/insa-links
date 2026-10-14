import { useState, useMemo } from "react";
import type { ItemProps } from "../types/ItemProps";
import type { FolderProps } from "../types/FolderProps";
import type { ViewMode } from "./ViewModeToggle";
import Folder from "./Folder";
import Link from "./Link";
import PhoneFolder from "./PhoneFolder";
import PhoneLink from "./PhoneLink";
import FolderModal from "./FolderModal";
import SearchIcon from "../assets/svg/SearchIcon";

interface Props {
    list: ItemProps[];
    viewMode?: ViewMode;
    searchQuery?: string;
    onClearSearch?: () => void;
}

export function ItemList({
    list,
    viewMode = "group",
    searchQuery = "",
    onClearSearch,
}: Props) {
    const [activeFolder, setActiveFolder] = useState<FolderProps | null>(null);

    // Filter items based on search query
    const filteredList = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return list;

        const results: ItemProps[] = [];

        for (const item of list) {
            if (item.type === "link") {
                if (
                    item.text.toLowerCase().includes(q) ||
                    item.url.toLowerCase().includes(q)
                ) {
                    results.push(item);
                }
            } else if (item.type === "folder") {
                const folderTitleMatches = item.text.toLowerCase().includes(q);
                const matchingChildren = item.list.filter(
                    (child) =>
                        child.type === "link" &&
                        (folderTitleMatches ||
                            child.text.toLowerCase().includes(q) ||
                            child.url.toLowerCase().includes(q))
                );

                if (matchingChildren.length > 0) {
                    results.push({
                        ...item,
                        list: matchingChildren,
                    });
                }
            }
        }

        return results;
    }, [list, searchQuery]);

    // Count visible links
    const totalLinks = useMemo(() => {
        return filteredList.reduce((acc, item) => {
            if (item.type === "link") return acc + 1;
            if (item.type === "folder") {
                return acc + item.list.filter((c) => c.type === "link").length;
            }
            return acc;
        }, 0);
    }, [filteredList]);

    if (filteredList.length === 0) {
        return (
            <div className="search-empty-state">
                <div className="search-empty-icon">
                    <SearchIcon />
                </div>
                <h3>Aucun résultat pour "{searchQuery}"</h3>
                <p>Vérifiez l'orthographe ou essayez un autre mot-clé.</p>
                {onClearSearch && (
                    <button
                        type="button"
                        onClick={onClearSearch}
                        className="search-empty-btn"
                    >
                        Réinitialiser la recherche
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="item-list-wrapper">
            {searchQuery.trim().length > 0 && (
                <div className="search-results-banner">
                    <span>
                        {totalLinks} {totalLinks > 1 ? "résultats trouvés" : "résultat trouvé"} pour{" "}
                        <strong>"{searchQuery}"</strong>
                    </span>
                    {onClearSearch && (
                        <button
                            type="button"
                            onClick={onClearSearch}
                            className="search-clear-inline"
                        >
                            Tout afficher
                        </button>
                    )}
                </div>
            )}

            {viewMode === "group" ? (
                /* Group / Mobile home screen view */
                <>
                    <div className="phone-screen-container">
                        <div className="phone-grid">
                            {filteredList.map((item, i) =>
                                item.type === "folder" ? (
                                    <PhoneFolder
                                        key={`folder-${item.text}-${i}`}
                                        folder={item}
                                        onOpen={(f) => setActiveFolder(f)}
                                    />
                                ) : (
                                    <PhoneLink
                                        key={`link-${item.text}-${i}`}
                                        link={item}
                                    />
                                )
                            )}
                        </div>
                    </div>

                    <FolderModal
                        isOpen={activeFolder !== null}
                        folder={activeFolder}
                        onClose={() => setActiveFolder(null)}
                    />
                </>
            ) : (
                /* Classic accordion list view */
                <div className="item-list">
                    {filteredList.map((item, i) =>
                        item.type === "folder" ? (
                            <Folder {...item} key={`folder-${item.text}-${i}`} />
                        ) : (
                            <Link {...item} key={`link-${item.text}-${i}`} />
                        )
                    )}
                </div>
            )}
        </div>
    );
}

export default ItemList;
