interface DropDownProps {
    dropdown_datas: DropDownData[];
    dropdown_toggle?: boolean;
}

interface DropDownData {
    id: number;
    text: string;
    on_click?: React.MouseEventHandler<HTMLButtonElement>;
}

interface DropDownStlyeProps {
    $dropdown_toggle?: boolean;
}
