import { useState } from 'react';
import TableMockDatas from './TableMockDatas';
import S from './index.styled';
import React from 'react';
import ProgressBar from '../../atoms/ProgressBar';
import TableForm from '../../molecules/TableForm';
import TableHeadRow from '../../molecules/TableHeadRow';
import TableBodyRow from '../../molecules/TableBodyRow';
import { TableBodyRowProps } from '../../molecules/TableBodyRow/index.types';

const Table = () => {
    const [currentTable, setCurrentTable] = useState(1);

    const makePages = (data: any, NumberOfPageContent: any) => {
        let pages = [];

        for (let i = 0; i < data?.length; i += NumberOfPageContent) {
            pages.push(data.slice(i, i + NumberOfPageContent));
        }

        return { pages };
    };

    const NumberOfPageContent = 10;
    const { pages } = makePages(TableMockDatas, NumberOfPageContent);

    return (
        <S.Table>
            {/* T-HEAD */}
            <thead>
                <TableHeadRow />
            </thead>

            {/* T-BODY */}
            <tbody>
                {/* Table Form */}
                <TableForm />
                {pages.map((page, idx) => {
                    //현재 페이지가 아니면 보여지지 않는 조건
                    if (idx + 1 === currentTable) {
                        return (
                            <React.Fragment>
                                {page.map((table_datas: TableBodyRowProps) => (
                                    <TableBodyRow
                                        url={table_datas.url}
                                        certificate={table_datas.certificate}
                                        expiration_date={table_datas.expiration_date}
                                        is_active={table_datas.is_active}
                                        cert_id={table_datas.cert_id}
                                        created_at={table_datas.created_at}
                                        updated_at={table_datas.updated_at}
                                    />
                                ))}
                            </React.Fragment>
                        );
                    } else {
                        return null;
                    }
                })}
            </tbody>
        </S.Table>
    );
};

export default Table;
