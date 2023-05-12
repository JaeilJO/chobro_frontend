import { LogoProps } from './index.types';
import S from './index.styled';

const Button = ({ font_size, text, width, height, outline }: LogoProps) => {
    if (outline) {
        return (
            <S.OutlineButton width={width} height={height} font_size={font_size}>
                {text}
            </S.OutlineButton>
        );
    }

    return (
        <S.Button width={width} height={height} font_size={font_size}>
            {text}
        </S.Button>
    );
};

export default Button;
