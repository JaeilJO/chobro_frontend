import S from './index.styled';
import LoginForm from '../../organisms/LoginForm';

import SignUpForm from '../../organisms/SignUpForm';
import { AuthModalProps } from './index.types';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleHeaderLoginButtonModal } from '../../../redux/features/modalSlice';

const AuthModal = ({ mode = 'login' }: AuthModalProps) => {
    const dispatch = useAppDispatch();
    const modalClose = () => {
        dispatch(toggleHeaderLoginButtonModal());
    };
    //toggleLoginButtonModal의 효과가 Modal창 안쪽까지 못오게 하는 것
    const handleAuthModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    return (
        <S.ModalBackground onClick={modalClose}>
            <S.AuthModal onClick={handleAuthModalClick}>
                {mode === 'login' ? <LoginForm /> : <SignUpForm />}
            </S.AuthModal>
        </S.ModalBackground>
    );
};

export default AuthModal;
