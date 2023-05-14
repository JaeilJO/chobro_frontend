import { FontSizeType } from '../../../styles/theme';

export interface AvatarProps {
    username: string;
    dropdown_datas?: DropDownData[];
    avataricon_font_size: FontSizeType;
    on_click?: React.MouseEventHandler<HTMLButtonElement>;
    dropdown_toggle: boolean;
}
