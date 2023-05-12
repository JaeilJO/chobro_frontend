import { LogoProps } from "./index.types";
import S from "./index.style";

const Logo = ({ width, height, text }: LogoProps) => {
  return (
    <S.Logo width={width} height={height}>
      {text}
    </S.Logo>
  );
};

export default Logo;
