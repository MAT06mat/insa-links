import ThemeButton from "./ThemeButton";
import ViewModeToggle, { type ViewMode } from "./ViewModeToggle";
import SearchBar from "./SearchBar";

interface HeaderProps {
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export function Header({
    viewMode,
    onViewModeChange,
    searchQuery,
    onSearchChange,
}: HeaderProps) {
    return (
        <header className="app-header">
            <div className="header-brand-container">
                <a href="./" className="header-brand-link">
                    <img
                        src="./icon.svg"
                        alt="Logo INSA"
                        className="header-logo"
                        width="36"
                        height="36"
                    />
                    <div className="header-title-wrapper">
                        <h1 className="header-title">INSA links</h1>
                    </div>
                </a>
            </div>

            <div className="header-search-wrapper">
                <SearchBar value={searchQuery} onChange={onSearchChange} />
            </div>

            <div className="header-actions">
                <ViewModeToggle
                    viewMode={viewMode}
                    onChange={onViewModeChange}
                />
                <div className="header-theme-wrapper">
                    <ThemeButton />
                </div>
            </div>
        </header>
    );
}

export default Header;
