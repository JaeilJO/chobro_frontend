import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';
import Link from 'next/link';

interface NavigationLinkProps {
    $active_link: boolean;
}

const S = {
    NavigationLink: styled(Link)<NavigationLinkProps>`
        color: ${({ theme, $active_link }) => ($active_link ? theme.LIGHT.COLOR.PRIMARY : theme.LIGHT.COLOR.GRAY)};
        font-weight: ${({ theme }) => theme.LIGHT.FONT_WEIGHT.BOLD};
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.XL};
        text-decoration: none;
        transition: 280ms;

        &:hover {
            color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY_FOCUS};
        }
    `,
};

export default S;
