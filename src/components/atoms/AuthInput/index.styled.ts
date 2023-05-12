import { styled } from 'styled-components';

interface AuthInputProps {
    $active: boolean;
}

const S = {
    AuthInputBox: styled.div`
        position: relative;
    `,
    AuthLabel: styled.label<AuthInputProps>`
        position: absolute;
        font-size: ${({ theme, $active }) => ($active ? theme.LIGHT.FONT_SIZE.MD : theme.LIGHT.FONT_SIZE.LG)};
        font-weight: ${({ theme, $active }) =>
            $active ? theme.LIGHT.FONT_WEIGHT.BOLD : theme.LIGHT.FONT_WEIGHT.LIGHT};
        top: ${({ $active }) => ($active ? `-1rem` : `1rem`)};
        left: 1rem;
        color: ${({ theme, $active }) => ($active ? theme.LIGHT.COLOR.PRIMARY : theme.LIGHT.COLOR.GRAY)};
    `,
    AuthInput: styled.input<AuthInputProps>`
        width: 100%;

        padding: 1rem;

        border: none;
        border-bottom: 1px solid
            ${({ theme, $active }) => ($active ? theme.LIGHT.COLOR.PRIMARY : theme.LIGHT.COLOR.GRAY)};

        font-size: ${({ theme }) => theme.LIGHT.FONT_SIZE.LG};
        font-weight: ${({ theme }) => theme.LIGHT.FONT_WEIGHT.LIGHT};

        &:focus {
            outline: none;
        }
    `,
};

export default S;
