import { useAppSelector } from '../../../redux/hooks';
import { usePostCertMutation } from '../../../redux/services/userApi';
import Button from '../../atoms/Button';
import S from './index.styled';
import { useRef, useState } from 'react';

export const isInputRefNull = (inputCurrent: HTMLInputElement | null) => {
    if (inputCurrent === null) {
        throw new Error('inputCurrent is Null');
    }
};

export const isInputRefValueEmpty = (inputCurrentValue: string | undefined) => {
    if (inputCurrentValue === '') {
        throw new Error('inputCurrentValue is Empty');
    }
};

const TableForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const accessToken = useAppSelector((state) => state.user.token);
    const [postCert, { isLoading }] = usePostCertMutation();
    const SubmitCertHandler = () => {
        //inputRef.current가 null인가?

        isInputRefValueEmpty(inputRef.current?.value);
        postCert({ url: inputRef.current?.value, accessToken: accessToken });
    };
    return (
        <S.TableForm>
            <S.TableFormTd colSpan={4}>
                <S.TableInput placeholder="Please Enter URL" />
            </S.TableFormTd>
            <S.TableFormTd>
                <Button
                    font_size={'L'}
                    text={'Submit'}
                    outline={false}
                    is_loading={false}
                    width={150}
                    on_click={SubmitCertHandler}
                />
            </S.TableFormTd>
        </S.TableForm>
    );
};

export default TableForm;
