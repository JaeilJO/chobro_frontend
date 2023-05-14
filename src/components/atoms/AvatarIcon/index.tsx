import { AvatarIconProps } from './index.types';
import S from './index.styled';

const AvatarIcon = ({ username, width, height, font_size, on_click }: AvatarIconProps) => {
    const first_spelling = username[0].toUpperCase();

    return (
        <S.AvatarIcon width={width} height={height} font_size={font_size} onClick={on_click}>
            {first_spelling}
        </S.AvatarIcon>
    );
};

export default AvatarIcon;
