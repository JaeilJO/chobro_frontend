import { styled } from 'styled-components';

const S = {
    Main: styled.main`
        min-width: 360px;
        max-width: 1200px;
        display: flex;
        flex-direction: column;

        margin: auto;
    `,

    MainTitle: styled.div`
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.XXXL};
        color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY};
        margin: 5rem 0;
        padding: 0 10px;
    `,
};

export default S;
