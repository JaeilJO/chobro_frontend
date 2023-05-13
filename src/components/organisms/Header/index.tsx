import { useRouter } from 'next/router';

import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import Navigation from '../../molecules/Navigation';
import S from './index.styled';

const Header = () => {
    const router = useRouter();
    const active_link = router.asPath;
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
                    <Button text={'LOGIN'} font_size="XL" outline={false} width={120} />
                </S.HeaderContent>
            </S.HeaderContents>
        </S.Header>
    );
};

export default Header;
