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
    AuthModal: styled.div`
        background-color: white;
        border: 1px solid ${({ theme }) => theme.LIGHT.COLOR.GRAY};
        width: 500px;
        height: 800px;

        padding: 10em 10em;
        border-radius: 1em;
    `,
};

export default S;
