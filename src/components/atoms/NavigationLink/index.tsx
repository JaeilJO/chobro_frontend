import { NavigationLinkProps } from './index.types';
import S from './index.styled';

const NavigationLink = ({ text, href, active_link }: NavigationLinkProps) => {
    return (
        <S.NavigationLink $active_link={active_link} href={href}>
            {text}
        </S.NavigationLink>
    );
};

export default NavigationLink;
