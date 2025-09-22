import type { ItemProps } from "../types/ItemProps";
import Item from "./Item";

interface Props {
    list: ItemProps[];
}

function ItemList({ list }: Props) {
    return (
        <div className={"item-list"}>
            {list.map((item, i) => (
                <Item item={item} key={i} />
            ))}
        </div>
    );
}

export default ItemList;
