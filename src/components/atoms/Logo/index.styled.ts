import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';
import Link from 'next/link';

interface LogoStyleProps {
    font_size?: FontSizeType;
}

const S = {
    Logo: styled(Link)<LogoStyleProps>`
        color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY};
        font-weight: ${({ theme }) => theme.LIGHT.FONT_WEIGHT.BOLD};
        font-size: ${({ theme, font_size = 'XXXL' }) => theme.LIGHT.FONT_SIZE[font_size]};
        text-decoration: none;
        transition: 280ms;

        &:hover {
            color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY_FOCUS};
        }
    `,
};

export default S;
