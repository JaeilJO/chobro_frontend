import S from './index.styled';
import { HeadItemType } from './index.types';

const TableHeadRow = () => {
    const thead_items: HeadItemType[] = [
        { id: 1, title: 'URL' },
        { id: 2, title: 'Certificate', column_sorting: true },
        { id: 3, title: 'Expiration Date', column_sorting: true },
        { id: 4, title: 'Acitve', text_align: 'center' },
        { id: 5, title: 'Progress' },
    ];
    return (
        <S.TableHeadRow>
            {thead_items.map((item) => (
                <S.TableHeadData key={item.id} text_align={item.text_align}>
                    {item.title}
                    {item.column_sorting ? '[Icon]' : ''}
                </S.TableHeadData>
            ))}
        </S.TableHeadRow>
    );
};

export default TableHeadRow;
