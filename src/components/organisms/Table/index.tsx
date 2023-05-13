import { useState } from 'react';

import S from './index.styled';
import React from 'react';

import TableForm from '../../molecules/TableForm';
import TableHeadRow from '../../molecules/TableHeadRow';
import TableBodyRow from '../../molecules/TableBodyRow';
import { TableBodyRowProps } from '../../molecules/TableBodyRow/index.types';
import { TableProps } from './index.types';

const Table = ({ table_data }: TableProps) => {
    const [currentTable, setCurrentTable] = useState(1);

    const makePages = (data: any, NumberOfPageContent: any) => {
        let pages = [];

        for (let i = 0; i < data?.length; i += NumberOfPageContent) {
            pages.push({
                id: i + 1,
                datas: data.slice(i, i + NumberOfPageContent),
            });
        }

        return { pages };
    };

    const NumberOfPageContent = 10;
    const { pages } = makePages(table_data, NumberOfPageContent);

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
                            <React.Fragment key={page.id}>
                                {page.datas.map((table_datas: TableBodyRowProps) => (
                                    <TableBodyRow
                                        key={table_datas.cert_id}
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
