interface DropDownProps {
    dropdown_datas: DropDownData[];
}

interface DropDownData {
    id: number;
    text: string;
    on_click?: React.MouseEventHandler<HTMLButtonElement>;
}
