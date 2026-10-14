import ListIcon from "../assets/svg/ListIcon";
import GridIcon from "../assets/svg/GridIcon";

export type ViewMode = "list" | "group";

interface ViewModeToggleProps {
    viewMode: ViewMode;
    onChange: (mode: ViewMode) => void;
}

export function ViewModeToggle({ viewMode, onChange }: ViewModeToggleProps) {
    return (
        <div
            className="view-mode-toggle"
            role="group"
            aria-label="Style d'affichage des dossiers"
        >
            <button
                type="button"
                className={`view-mode-btn ${viewMode === "group" ? "active" : ""}`}
                onClick={() => onChange("group")}
                title="Affichage Groupes (Dossiers style smartphone avec popup)"
                aria-pressed={viewMode === "group"}
            >
                <GridIcon />
                <span className="btn-label">Groupes</span>
            </button>
            <button
                type="button"
                className={`view-mode-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => onChange("list")}
                title="Affichage Liste classique (Dossiers déroulants)"
                aria-pressed={viewMode === "list"}
            >
                <ListIcon />
                <span className="btn-label">Liste</span>
            </button>
        </div>
    );
}

export default ViewModeToggle;

