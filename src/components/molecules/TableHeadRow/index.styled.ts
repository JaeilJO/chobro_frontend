import { BsChevronDown } from 'react-icons/bs';
import { styled } from 'styled-components';

interface TableHeadDataProps {
    text_align?: 'center' | 'left' | 'right';
}

const S = {
    TableHeadRow: styled.tr`
        height: 50px;
    `,
    TableHeadData: styled.th<TableHeadDataProps>`
        text-align: ${({ text_align = 'left' }) => text_align};
        padding: 0 1em;
        vertical-align: middle;
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.LG};
        border-bottom: 1px solid ${({ theme }) => theme.LIGHT.COLOR.GRAY};
    `,
    TableHeadIcon: styled(BsChevronDown)`
        margin-left: 10px;
    `,
};

export default S;
