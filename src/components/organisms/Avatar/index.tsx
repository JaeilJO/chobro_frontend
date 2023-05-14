import AvatarIcon from '../../atoms/AvatarIcon';
import DropDown from '../../molecules/DropDown';
import S from './index.styled';
import { AvatarProps } from './index.types';

const Avatar = ({ dropdown_datas, username, avataricon_font_size, on_click, dropdown_toggle }: AvatarProps) => {
    if (dropdown_datas) {
        return (
            <S.Avatar>
                <AvatarIcon username={username} font_size={avataricon_font_size} on_click={on_click} />
                {<DropDown dropdown_datas={dropdown_datas} dropdown_toggle={dropdown_toggle} />}
            </S.Avatar>
        );
    }
    return <AvatarIcon username={username} font_size={avataricon_font_size} />;
};

export default Avatar;
