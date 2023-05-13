import { styled } from 'styled-components';

const S = {
    Table: styled.table`
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    `,
    Thead: {
        TR: styled.tr`
            height: 50px;
        `,
        TH: styled.th`
            font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.LG};
            border-bottom: 1px solid ${({ theme }) => theme.LIGHT.COLOR.GRAY};
        `,
    },
};

export default S;
