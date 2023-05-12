import { NavigationLinkProps } from './index.types';
import S from './index.styled';

const NavigationLink = ({ text, href }: NavigationLinkProps) => {
    return <S.NavigationLink href={href}>{text}</S.NavigationLink>;
};

export default NavigationLink;
