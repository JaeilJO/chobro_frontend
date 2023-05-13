import S from './index.styled';
import LoginForm from '../../organisms/LoginForm';

import SignUpForm from '../../organisms/SignUpForm';
import { AuthModalProps } from './index.types';

const AuthModal = ({ mode = 'login' }: AuthModalProps) => {
    return (
        <S.ModalBackground>
            <S.AuthModal>{mode === 'login' ? <LoginForm /> : <SignUpForm />}</S.AuthModal>
        </S.ModalBackground>
    );
};

export default AuthModal;
