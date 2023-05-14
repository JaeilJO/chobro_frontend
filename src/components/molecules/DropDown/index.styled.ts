import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';
import Link from 'next/link';

const S = {
    DropDown: styled.ul`
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 1em;
        height: 100%;
        border-radius: 1em;
        padding: 1em 1em;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    `,
    DropDownLi: styled.li`
        display: flex;
        justify-content: center;
    `,
};

export default S;
