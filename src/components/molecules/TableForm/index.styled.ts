import { keyframes, styled } from 'styled-components';
import { FontSizeType } from '../../../styles/theme';
import Link from 'next/link';

const S = {
    TableForm: styled.tr`
        width: 40px;
    `,
    TableFormTd: styled.td`
        text-align: center;
        padding: 0px 10px;
        border-bottom: 1px solid ${({ theme }) => theme.LIGHT.COLOR.GRAY};
    `,
    TableInput: styled.input`
        border: none;
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.LG};
        padding: 1em;
        width: 100%;
        &:focus {
            outline: none;
        }
    `,
};

export default S;
