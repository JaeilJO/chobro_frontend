import Button from '../../atoms/Button';
import S from './index.styled';
import { useState } from 'react';

const TableForm = () => {
    return (
        <S.TableForm>
            <S.TableFormTd colSpan={4}>
                <S.TableInput placeholder="Please Enther URL" />
            </S.TableFormTd>
            <S.TableFormTd>
                <Button font_size={'LG'} text={'Submit'} outline={false} is_loading={false} width={150} />
            </S.TableFormTd>
        </S.TableForm>
    );
};

export default TableForm;
