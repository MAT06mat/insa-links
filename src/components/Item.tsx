import type { ItemProps } from "../types/ItemProps";
import Link from "./Link";
import Folder from "./Folder";

function Item({ item }: { item: ItemProps }) {
    if (item.type === "folder") {
        return <Folder {...item} />;
    } else if (item.type === "link") {
        return <Link {...item} />;
    }
    return <></>;
}

export default Item;
