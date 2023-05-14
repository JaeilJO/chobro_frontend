import { styled } from 'styled-components';

const S = {
    DropDownButton: styled.button`
        border: none;
        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.L};
        padding: 0.5em 2em;
        border-radius: 0.5em;
        background-color: ${({ theme }) => theme.LIGHT.COLOR.GRAY};
        color: ${({ theme }) => theme.LIGHT.COLOR.BLACK};
        transition: 280ms;
        cursor: pointer;
        &:hover {
            background-color: ${({ theme }) => theme.LIGHT.COLOR.SECOND};
            color: ${({ theme }) => theme.LIGHT.COLOR.WHITE};
        }
    `,
};

export default S;
