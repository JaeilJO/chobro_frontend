import DropDownButton from '../../atoms/DorpDownButton';
import S from './index.styled';

const DropDown = ({ dropdown_datas, dropdown_toggle }: DropDownProps) => {
    return (
        <S.DropDown $dropdown_toggle={dropdown_toggle}>
            {dropdown_datas?.map((data) => (
                <S.DropDownLi key={data.id}>
                    <DropDownButton text={data.text} on_click={data.on_click} type={data.type} />
                </S.DropDownLi>
            ))}
        </S.DropDown>
    );
};

export default DropDown;
