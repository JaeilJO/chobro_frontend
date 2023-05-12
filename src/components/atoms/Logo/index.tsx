import { LogoProps } from './index.types';
import S from './index.styled';

const Logo = ({ font_size, text }: LogoProps) => {
    return <S.Logo font_size={font_size}>{text}</S.Logo>;
};

export default Logo;
