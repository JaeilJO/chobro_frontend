import { styled } from 'styled-components';

interface HeaderContentStyleProps {
    justify_content: `flex-start` | `flex-end` | `center`;
    flex_grow?: number;
    margin?: string;
}

const S = {
    Header: styled.header`
        min-width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.LIGHT.COLOR.GRAY};
    `,

    HeaderContents: styled.div`
        display: flex;
        min-width: 360px;
        max-width: 1200px;
        margin: auto;
        justify-content: space-between;
    `,

    HeaderContent: styled.div<HeaderContentStyleProps>`
        display: flex;
        align-items: center;
        margin: ${({ margin }) => margin};
        flex-grow: ${({ flex_grow }) => flex_grow};
        justify-content: ${({ justify_content }) => justify_content};
    `,
};

export default S;
