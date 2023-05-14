import DropDownButton from '../../atoms/DorpDownButton';
import S from './index.styled';

const DropDown = () => {
    return (
        <S.DropDown>
            <S.DropDownLi>
                <DropDownButton text="Text" />
            </S.DropDownLi>
        </S.DropDown>
    );
};

export default DropDown;
