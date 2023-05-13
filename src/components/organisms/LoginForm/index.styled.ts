import { styled } from 'styled-components';

const S = {
    LoginForm: styled.form`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    `,
    FormSeparator: styled.div`
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.LG};
        color: ${({ theme }) => theme.LIGHT.COLOR.GRAY};
        text-align: center;
    `,
    SignUpPormpt: styled.div`
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
    `,
    SignUpPormptText: styled.div`
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.LG};
        color: ${({ theme }) => theme.LIGHT.COLOR.BLACK};
    `,
    SignUpPormptButton: styled.button`
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.LG};
        border: none;
        background: none;
        color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY};
        cursor: pointer;
        transition: 280ms;
        &:hover {
            color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY_FOCUS};
        }
    `,
};

export default S;
