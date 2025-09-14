import type { ItemProps } from "./ItemProps";

export type LinksFolderProps = {
    type: "folder";
    text: string;
    list: ItemProps[];
};
