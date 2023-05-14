import { useRouter } from 'next/router';

import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import Navigation from '../../molecules/Navigation';
import S from './index.styled';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleHeaderAvatarModal, toggleHeaderLoginButtonModal } from '../../../redux/features/modalSlice';
import { HeaderProps } from './index.types';
import Avatar from '../../atoms/Avatar';

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
                        <Avatar username={username} font_size={'M'} />
                    ) : (
                        <Button text={'LOGIN'} font_size="XL" outline={false} width={120} on_click={authModalToggle} />
                    )}
                </S.HeaderContent>
            </S.HeaderContents>
        </S.Header>
    );
};

export default Header;
