import { BsChevronDown } from 'react-icons/bs';
import { styled } from 'styled-components';

interface TableBodyDataProps {
    text_align?: 'center' | 'left' | 'right';
}

const S = {
    TableBodyRow: styled.tr`
        height: 50px;
        width: 100%;
        &:hover {
            background-color: ${({ theme }) => theme.LIGHT.COLOR.GRAY};
        }
    `,
    TableBodyData: styled.td<TableBodyDataProps>`
        text-align: ${({ text_align = 'left' }) => text_align};
        padding: 0 1em;
        vertical-align: middle;
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.LG};
        border-bottom: 1px solid ${({ theme }) => theme.LIGHT.COLOR.GRAY};
    `,
};

export default S;
