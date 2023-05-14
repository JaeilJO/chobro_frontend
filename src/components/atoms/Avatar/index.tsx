import { AvatarProps } from './index.types';
import S from './index.styled';

const Avatar = ({ username, width, height, font_size }: AvatarProps) => {
    const first_spelling = username[0].toUpperCase();

    return (
        <S.Avatar width={width} height={height} font_size={font_size}>
            {first_spelling}
        </S.Avatar>
    );
};

export default Avatar;
