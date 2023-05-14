import { styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';
import Link from 'next/link';

const S = {
    DropDown: styled.ul<DropDownStlyeProps>`
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 1em;
        border-radius: 1em;
        padding: ${({ $dropdown_toggle }) => ($dropdown_toggle ? `1em 1em` : `0%`)};
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        position: absolute;
        overflow: hidden;
        background-color: ${({ theme }) => theme.LIGHT.COLOR.WHITE};
        top: ${({ $dropdown_toggle }) => ($dropdown_toggle ? `120%` : `100%`)};
        opacity: ${({ $dropdown_toggle }) => ($dropdown_toggle ? `100%` : `0%`)};
        overflow: hidden;
        transition: 200ms;
    `,
    DropDownLi: styled.li`
        display: flex;
        justify-content: center;
    `,
};

export default S;
