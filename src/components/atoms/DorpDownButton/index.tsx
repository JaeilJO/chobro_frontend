import React from 'react';
import S from './index.styled';
import { DropDownButtonProps } from './index.types';
import { useLogoutQuery } from '../../../redux/services/authApi';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { logout } from '../../../redux/features/userSlice';

const DropDownButton = ({ text, on_click, type }: DropDownButtonProps) => {
    const dispatch = useAppDispatch();
    // Atoms이지만, 해당 logout버튼은 RTK Query가 현재 원하는 상황에 적용되지 않고 안전하게 해결하고 싶어서 해당 방법을 사용함
    const accessToken = useAppSelector((state) => state.user.token);
    const logoutHandler = async () => {
        await fetch('http://localhost:4000/auth/logout', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }).then(dispatch(logout()));
    };

    if (type === 'logout') {
        return <S.DropDownButton onClick={logoutHandler}>{'Logout'}</S.DropDownButton>;
    }

    return <S.DropDownButton onClick={on_click}>{text}</S.DropDownButton>;
};

export default DropDownButton;
0;
