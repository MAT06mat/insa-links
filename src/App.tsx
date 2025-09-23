import ItemList from "./components/ItemList";
import { LinksList } from "./assets/LinksList";
import ThemeButton from "./components/ThemeButton";
import "./styles/App.scss";

function App() {
    return (
        <>
            <header>
                <h2>INSA links</h2>
                <ThemeButton />
            </header>
            <section>
                <ItemList list={LinksList} />
            </section>
            <footer>
                Site par{" "}
                <a href="https://github.com/mat06mat" target="_blank">
                    MAT06mat
                </a>
            </footer>
        </>
    );
}

export default App;
