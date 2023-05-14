import { FontSizeType } from '../../../styles/theme';

export interface AvatarIconProps {
    username: string;
    width?: number;
    height?: number;
    font_size: FontSizeType;
    on_click?: React.MouseEventHandler<HTMLButtonElement>;
}
