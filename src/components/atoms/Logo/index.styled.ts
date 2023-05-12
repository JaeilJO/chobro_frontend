import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';

interface LogoStyleProps {
    font_size?: FontSizeType;
}

const S = {
    Logo: styled.div<LogoStyleProps>`
        color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY};
        font-weight: ${({ theme }) => theme.LIGHT.FONT_WEIGHT.BOLD};
        font-size: ${({ theme, font_size = 'XXXL' }) => theme.LIGHT.FONT_SIZE[font_size]};
    `,
};

export default S;
