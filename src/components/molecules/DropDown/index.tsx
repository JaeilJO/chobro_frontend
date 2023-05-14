import DropDownButton from '../../atoms/DorpDownButton';
import S from './index.styled';

const DropDown = ({ dropdown_datas }: DropDownProps) => {
    return (
        <S.DropDown>
            {dropdown_datas.map((data) => (
                <S.DropDownLi key={data.id}>
                    <DropDownButton text={data.text} on_click={data.on_click} />
                </S.DropDownLi>
            ))}
        </S.DropDown>
    );
};

export default DropDown;
