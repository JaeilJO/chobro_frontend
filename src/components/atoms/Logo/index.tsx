import { LogoProps } from './index.types';
import S from './index.styled';

const Logo = ({ font_size, text, href }: LogoProps) => {
    return (
        <S.Logo font_size={font_size} href={href}>
            {text}
        </S.Logo>
    );
};

export default Logo;
