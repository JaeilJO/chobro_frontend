import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';
import Link from 'next/link';

interface NavigationStyleProps {
    justify_content: `flex-start` | `flex-end` | `center` | `space-between`;
}

const S = {
    Navigation: styled.ul<NavigationStyleProps>`
        list-style: none;
        display: flex;
        height: 50px;
        align-items: center;

        gap: 3em;

        justify-content: ${({ justify_content }) => justify_content};
    `,
    NaviationLi: styled.li`
        height: 100%;
        display: flex;
        align-items: center;
    `,
};

export default S;
