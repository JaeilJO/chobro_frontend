import Button from '../../atoms/Button';
import ProgressBar from '../../atoms/ProgressBar';
import S from './index.styled';
import { HeadItemType, TableBodyRowProps } from './index.types';

const TableBodyRow = ({
    url,
    certificate,
    expiration_date,
    is_active,
    cert_id,
    created_at,
    updated_at,
}: TableBodyRowProps) => {
    //percent 계산
    const calculatePercentage = (created_at: string, expiration_date: string): number => {
        let percent = 0;
        let now = new Date().setHours(0, 0, 0);
        const start = new Date(created_at as string).setHours(0, 0, 0);
        const finish = new Date(expiration_date as string).setHours(0, 0, 0);

        const totalDays = Math.floor((finish - start) / (1000 * 60 * 60 * 24)) + 1;
        const startToNow = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
        percent = Math.floor((startToNow / totalDays) * 100);

        if (percent > 100) {
            percent = 100;
        }

        return percent;
    };

    const percentage = calculatePercentage(created_at, expiration_date);

    return (
        <S.TableBodyRow>
            <S.TableBodyData>{url}</S.TableBodyData>

            <S.TableBodyData>{certificate}</S.TableBodyData>

            <S.TableBodyData>{expiration_date}</S.TableBodyData>

            <S.TableBodyData text_align="center">
                <Button font_size={'MD'} text={is_active ? 'Active' : 'InActive'} outline={false} is_loading={false} />
            </S.TableBodyData>

            <S.TableBodyData width={300} text_align="center">
                <ProgressBar percentage={percentage} />
            </S.TableBodyData>
        </S.TableBodyRow>
    );
};

export default TableBodyRow;
