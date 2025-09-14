import type { ItemProps } from "../types/ItemProps";
import Link from "./Link";
import LinksFolder from "./LinksFolder";

function Item({ item }: { item: ItemProps }) {
    if (item.type === "folder") {
        return <LinksFolder {...item} />;
    } else if (item.type === "link") {
        return <Link {...item} />;
    }
    return <></>;
}

export default Item;
