import "./App.scss";
import type { LinkProps } from "./types/LinkProps";
import type { LinksFolderProps } from "./types/LinksFolderProps";
import type { ItemProps } from "./types/ItemProps";
import ItemList from "./components/ItemList";

function App() {
    const links: LinkProps[] = [
        {
            type: "link",
            text: "1er link",
            url: "https://moodle.com",
        },
        {
            type: "link",
            text: "2ème link",
            url: "https://moodle.insa-lyon.fr",
            icon: "https://moodle.com",
        },
        {
            type: "link",
            text: "3ème link",
            url: "https://google.com",
        },
        {
            type: "link",
            text: "dernier link",
            url: "https://google.com",
        },
    ];

    const folderProps: LinksFolderProps = {
        type: "folder",
        text: "Mon folder",
        list: links,
    };

    const list: ItemProps[] = [
        folderProps,
        folderProps,
        { type: "folder", text: "AA", list: [folderProps, ...links] },
        links[1],
        links[3],
    ];

    return (
        <>
            <header>
                <h2>Fastlinks</h2>
                <img src="/icon.svg" alt="Falstlink icon" />
            </header>
            <section>
                <ItemList list={list} noPadding />
            </section>
        </>
    );
}

export default App;
