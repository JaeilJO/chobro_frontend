import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';
import Link from 'next/link';

interface ButtonStyleProps {
    font_size?: FontSizeType;
    width?: number;
    height?: number;
    display?: 'block' | 'inline' | 'inline-block';
}

const CommonButtonStyle = styled.button<ButtonStyleProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    font-size: ${({ theme, font_size = 'MD' }) => theme.LIGHT.FONT_SIZE[font_size]};
    border-radius: 0.3em;
    padding: 0.5em;
    transition: 280ms;
    cursor: pointer;
    display: ${({ display }) => display};

    &:hover {
        background-color: ${({ theme }) => theme.LIGHT.COLOR.SECOND_FOCUS};
    }
`;

const S = {
    OutlineButton: styled(CommonButtonStyle)<ButtonStyleProps>`
        color: ${({ theme }) => theme.LIGHT.COLOR.SECOND};
        border: 1px solid ${({ theme }) => theme.LIGHT.COLOR.SECOND};
        background-color: ${({ theme }) => theme.LIGHT.COLOR.WHITE};
        &:hover {
            color: ${({ theme }) => theme.LIGHT.COLOR.WHITE};
            border: ${({ theme }) => theme.LIGHT.COLOR.SECOND_FOCUS};
        }
    `,

    Button: styled(CommonButtonStyle)<ButtonStyleProps>`
        color: ${({ theme }) => theme.LIGHT.COLOR.WHITE};
        background-color: ${({ theme }) => theme.LIGHT.COLOR.SECOND};
        border: 1px solid ${({ theme }) => theme.LIGHT.COLOR.SECOND};
    `,

    LoadingButton: styled(CommonButtonStyle)<ButtonStyleProps>`
        background-color: ${({ theme }) => theme.LIGHT.COLOR.GRAY};
        color: ${({ theme }) => theme.LIGHT.COLOR.WHITE};
        border: none;
        pointer-events: none;
    `,
};

export default S;
