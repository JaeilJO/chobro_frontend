import { styled } from 'styled-components';

const S = {
    ModalBackground: styled.div`
        position: absolute;
        backdrop-filter: blur(10px);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    ActiveButtonModal: styled.div`
        position: relative;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid ${({ theme }) => theme.LIGHT.COLOR.GRAY};
        width: 400px;
        height: 200px;
        z-index: 10;
        padding: 3em 2em;
        border-radius: 1em;
    `,
    Title: styled.div`
        text-align: center;
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.XL};
        pointer-events: none;
    `,
    Url: styled.div`
        text-align: center;
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.L};
        margin-top: 10px;
    `,
    ButtonSet: styled.div`
        display: flex;
        justify-content: flex-end;
        gap: 1em;
    `,
    Point: styled.span`
        color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY};
    `,
};

export default S;
