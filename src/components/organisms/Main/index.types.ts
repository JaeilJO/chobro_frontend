import { FontSizeType } from '../../../styles/theme';

export interface ButtonProps {
    font_size: FontSizeType;
    width?: number;
    height?: number;
    text: string;
    outline: boolean;
}
