import type { ItemProps } from "../types/ItemProps";
import Item from "./Item";

interface Props {
    list: ItemProps[];
    noPadding?: boolean;
}

function ItemList({ list, noPadding }: Props) {
    return (
        <div className={"item-list" + (noPadding ? " no-padding" : "")}>
            {list.map((item, i) => (
                <Item item={item} key={i} />
            ))}
        </div>
    );
}

export default ItemList;
