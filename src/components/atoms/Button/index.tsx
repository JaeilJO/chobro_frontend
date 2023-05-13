import { ButtonProps } from './index.types';
import S from './index.styled';

const Button = ({ font_size, text, width, height, outline, on_click, display, is_loading = false }: ButtonProps) => {
    if (is_loading) {
        return (
            <S.LoadingButton width={width} height={height} font_size={font_size} display={display} onClick={on_click}>
                {text}
            </S.LoadingButton>
        );
    }

    if (outline) {
        return (
            <S.OutlineButton width={width} height={height} display={display} font_size={font_size} onClick={on_click}>
                {text}
            </S.OutlineButton>
        );
    }

    return (
        <S.Button width={width} height={height} font_size={font_size} display={display} onClick={on_click}>
            {text}
        </S.Button>
    );
};

export default Button;
