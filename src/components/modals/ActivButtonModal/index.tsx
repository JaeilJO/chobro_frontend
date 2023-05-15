import S from './index.styled';
import LoginForm from '../../organisms/LoginForm';

import SignUpForm from '../../organisms/SignUpForm';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { closeToggleTableActiveModal, toggleHeaderLoginButtonModal } from '../../../redux/features/modalSlice';
import { ActiveButtonModalProps } from './index.types';
import Button from '../../atoms/Button';
import { usePatchCertMutation } from '../../../redux/services/userApi';

const ActiveButtonModal = () => {
    const dispatch = useAppDispatch();
    const { is_active, url, cert_id } = useAppSelector((state) => state.modal.tableActiveModal);
    const modalClose = () => {
        dispatch(closeToggleTableActiveModal());
    };
    const accessToken = useAppSelector((state) => state.user.token);

    const [patchCert, { isLoading }] = usePatchCertMutation();
    //toggleLoginButtonModal의 효과가 Modal창 안쪽까지 못오게 하는 것
    const handleActiveButtonModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const changeActiveStatusHandler = () => {
        patchCert({ cert_id: cert_id, accessToken: accessToken, is_active: !is_active });
        dispatch(closeToggleTableActiveModal());
    };
    return (
        <S.ModalBackground onClick={modalClose}>
            <S.ActiveButtonModal onClick={handleActiveButtonModalClick}>
                <div>
                    <S.Title>
                        Would you like to <S.Point>{is_active ? 'deactivate' : 'activate'}</S.Point> this URL?
                    </S.Title>
                    <S.Url>{url}</S.Url>
                </div>
                <S.ButtonSet>
                    <Button font_size={'L'} text={'Close'} type="gray" on_click={modalClose} />
                    <Button font_size={'L'} text={'Active'} on_click={changeActiveStatusHandler} />
                </S.ButtonSet>
            </S.ActiveButtonModal>
        </S.ModalBackground>
    );
};

export default ActiveButtonModal;
