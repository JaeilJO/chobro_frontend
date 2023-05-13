import { ButtonProps } from './index.types';
import S from './index.styled';
import LoginForm from '../../organisms/LoginForm';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SignUpForm from '../../organisms/SignUpForm';

const AuthModal = () => {
    const [mode, setmode] = useState('signup');
    return (
        <S.ModalBackground>
            <S.AuthModal>{mode === 'login' ? <LoginForm /> : <SignUpForm />}</S.AuthModal>
        </S.ModalBackground>
    );
};

export default AuthModal;
