import { styled } from 'styled-components';

const S = {
    SignUpForm: styled.form`
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

    FormTitle: styled.h1`
        font-weight: ${({ theme }) => theme.LIGHT.FONT_WEIGHT.LIGHT};
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.XXXL};
        color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY};
        pointer-events: none;
    `,

    //SignUp Prompt
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
