import { ButtonProps } from './index.types';
import S from './index.styled';
import LoginForm from '../../organisms/LoginForm';

const AuthModal = () => {
    return (
        <S.ModalBackground>
            <S.AuthModal>
                <LoginForm />
            </S.AuthModal>
        </S.ModalBackground>
    );
};

export default AuthModal;
