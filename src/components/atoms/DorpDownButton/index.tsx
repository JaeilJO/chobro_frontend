import React from 'react';
import S from './index.styled';

const DropDownButton = ({ text, on_click }: DropDownButtonProps) => {
    return <S.DropDownButton onClick={on_click}>{text}</S.DropDownButton>;
};

export default DropDownButton;
