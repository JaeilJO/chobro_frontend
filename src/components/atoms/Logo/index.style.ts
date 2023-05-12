import { styled } from "styled-components";

interface LogoStyleProps {
  width: number;
  height: number;
}

const S = {
  Logo: styled.div<LogoStyleProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background-color: ${({ theme }) => theme.LIGHT.COLOR.PRIMARY};
  `,
};

export default S;
