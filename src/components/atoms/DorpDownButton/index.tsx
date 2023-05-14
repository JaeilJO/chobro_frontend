import React from 'react';
import S from './index.styled';
import { DropDownButtonProps } from './index.types';

const DropDownButton = ({ text, on_click }: DropDownButtonProps) => {
    return <S.DropDownButton onClick={on_click}>{text}</S.DropDownButton>;
};

export default DropDownButton;
