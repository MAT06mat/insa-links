import { useRef } from "react";
import SearchIcon from "../assets/svg/SearchIcon";
import CloseIcon from "../assets/svg/CloseIcon";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        onChange("");
        inputRef.current?.focus();
    };

    return (
        <div className="search-bar-container">
            <div className="search-bar-inner">
                <SearchIcon className="search-icon" />
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") {
                            handleClear();
                        }
                    }}
                    placeholder="Rechercher un lien, intranet, outil..."
                    className="search-input"
                    aria-label="Rechercher des liens"
                />
                {value.length > 0 && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="search-clear-btn"
                        aria-label="Effacer la recherche"
                        title="Effacer"
                    >
                        <CloseIcon />
                    </button>
                )}
            </div>
        </div>
    );
}

export default SearchBar;

