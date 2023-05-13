import { AuthInpuProps } from './index.types';
import S from './index.styled';
import { useRef, useState, useCallback } from 'react';

const AuthInput = ({ type, placeholder }: AuthInpuProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [active, setActive] = useState(false);
    let typeName: string;

    //Handler For
    const onFocus = useCallback(() => {
        setActive(true);
    }, []);
    const onBlur = useCallback(() => {
        setActive(inputRef.current?.value !== '');
    }, []);

    //Type

    return (
        <S.AuthInputBox>
            <S.AuthLabel $active={active}>{placeholder}</S.AuthLabel>
            <S.AuthInput
                name={type}
                id={type}
                required
                type={type}
                $active={active}
                ref={inputRef}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </S.AuthInputBox>
    );
};

export default AuthInput;
