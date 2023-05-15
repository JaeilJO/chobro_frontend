import { FontSizeType } from '../../../styles/theme';

export interface ButtonProps {
    font_size: FontSizeType;
    width?: number;
    height?: number;
    text: string;
    outline?: boolean;
    display?: 'block' | 'inline' | 'inline-block';
    is_loading?: boolean;
    on_click?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'gray' | 'primary';
}
