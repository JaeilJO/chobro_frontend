import { useRouter } from 'next/router';

import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import Navigation from '../../molecules/Navigation';
import S from './index.styled';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { toggleHeaderAvatarModal, toggleHeaderLoginButtonModal } from '../../../redux/features/modalSlice';
import { HeaderProps } from './index.types';
import Avatar from '../Avatar';
import { loginModalDropDownItems } from '../../../utils/listItems';

const Header = ({ isLoggedIn, username }: HeaderProps) => {
    const router = useRouter();
    const active_link = router.asPath;

    const dispatch = useAppDispatch();

    const authModalToggle = () => {
        dispatch(toggleHeaderLoginButtonModal());
    };

    const headerAvatarMdolToggle = () => {
        dispatch(toggleHeaderAvatarModal());
    };

    const headerAvatarModal = useAppSelector((state) => state.modal.headerAvatarModal);
    return (
        <S.Header>
            <S.HeaderContents>
                {/* LOGO Part */}
                <S.HeaderContent justify_content={'flex-start'}>
                    <Logo text={'JoBro'} href={'/'} font_size="XXXL" />
                </S.HeaderContent>

                {/* Navigation */}
                <S.HeaderContent justify_content={'flex-end'} flex_grow={1} margin="0 30px 0 0">
                    <Navigation active_link={active_link} justify_content="flex-end" />
                </S.HeaderContent>

                {/* Button */}
                <S.HeaderContent justify_content={'flex-end'}>
                    {isLoggedIn ? (
                        <>
                            <Avatar
                                username={username}
                                dropdown_datas={loginModalDropDownItems}
                                avataricon_font_size={'XXXL'}
                                dropdown_toggle={headerAvatarModal}
                                on_click={headerAvatarMdolToggle}
                            />
                        </>
                    ) : (
                        <Button text={'LOGIN'} font_size="XL" outline={false} width={120} on_click={authModalToggle} />
                    )}
                </S.HeaderContent>
            </S.HeaderContents>
        </S.Header>
    );
};

export default Header;
