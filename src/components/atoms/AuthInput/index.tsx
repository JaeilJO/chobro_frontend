import { LogoProps } from './index.types';
import S from './index.styled';
import { useRef, useState, useCallback } from 'react';

const AuthInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [active, setActive] = useState(false);

    //Handler For
    const onFocus = useCallback(() => {
        setActive(true);
    }, []);
    const onBlur = useCallback(() => {
        setActive(inputRef.current?.value !== '');
    }, []);

    return (
        <S.AuthInputBox>
            <S.AuthLabel $active={active}>Hello</S.AuthLabel>
            <S.AuthInput $active={active} ref={inputRef} onFocus={onFocus} onBlur={onBlur} />
        </S.AuthInputBox>
    );
};

export default AuthInput;
