import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';

interface AvatarIconPorps {
    width?: number;
    height?: number;
    font_size?: FontSizeType;
}

const S = {
    AvatarIcon: styled.button<AvatarIconPorps>`
        width: ${({ width = 50 }) => width}px;
        height: ${({ height = 50 }) => height}px;
        font-size: ${({ theme, font_size = 'XXXL' }) => theme.LIGHT.FONT_SIZE[font_size]};
        background-color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY};
        border-radius: 50%;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.LIGHT.COLOR.WHITE};
        &:hover {
            background-color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY_FOCUS};
        }
    `,
};

export default S;
