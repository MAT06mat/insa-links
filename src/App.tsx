import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import { LinksList } from "./assets/LinksList";
import { usePersistedState } from "./hooks/usePersistedState";
import type { ViewMode } from "./components/ViewModeToggle";
import GithubIcon from "./assets/svg/GithubIcon";
import "./styles/App.scss";

function App() {
    const [viewMode, setViewMode] = usePersistedState<ViewMode>(
        "folderViewMode",
        "group",
    );
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="app-wrapper">
            <Header
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <main className="main-content">
                <ItemList
                    list={LinksList}
                    viewMode={viewMode}
                    searchQuery={searchQuery}
                    onClearSearch={() => setSearchQuery("")}
                />
            </main>
            <footer className="app-footer">
                <div className="footer-content">
                    <span className="footer-credits">
                        Créé par{" "}
                        <a
                            href="https://github.com/mat06mat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-author"
                        >
                            <GithubIcon />
                            <span>MAT06mat</span>
                        </a>
                    </span>
                    <span className="footer-badge">
                        INSA Lyon &bull; Liens utiles
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default App;
