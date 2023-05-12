import NavigationLink from '../../atoms/NavigationLink';
import S from './index.styled';
import { NavigationProps } from './index.types';
import navigationItems from './navigationItems';

const Navigation = ({ active_link, justify_content }: NavigationProps) => {
    return (
        <S.Navigation justify_content={justify_content}>
            {navigationItems.map((item) => (
                <S.NaviationLi key={item.id}>
                    <NavigationLink active_link={active_link} text={item.text} href={item.href} />
                </S.NaviationLi>
            ))}
        </S.Navigation>
    );
};

export default Navigation;
