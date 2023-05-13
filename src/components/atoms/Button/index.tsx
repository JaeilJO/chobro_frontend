import { ButtonProps } from './index.types';
import S from './index.styled';

const Button = ({ font_size, text, width, height, outline, onClick, display }: ButtonProps) => {
    if (outline) {
        return (
            <S.OutlineButton width={width} height={height} display={display} font_size={font_size} onClick={onClick}>
                {text}
            </S.OutlineButton>
        );
    }

    return (
        <S.Button width={width} height={height} font_size={font_size} display={display} onClick={onClick}>
            {text}
        </S.Button>
    );
};

export default Button;
