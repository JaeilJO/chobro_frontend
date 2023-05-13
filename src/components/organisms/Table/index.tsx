import { useState } from 'react';
import TableMockDatas from './TableMockDatas';
import S from './index.styled';
import React from 'react';
import ProgressBar from '../../atoms/ProgressBar';
import TableForm from '../../molecules/TableForm';

const Table = () => {
    const [currentTable, setCurrentTable] = useState(1);

    const thead_items = [
        { id: 1, title: 'URL' },
        { id: 2, title: 'Certificate' },
        { id: 3, title: 'Expiration Date' },
        { id: 4, title: 'Acitve' },
        { id: 5 },
    ];
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

    const makePages = (data: any, NumberOfPageContent: any) => {
        let pages = [];

        for (let i = 0; i < data?.length; i += NumberOfPageContent) {
            pages.push(data.slice(i, i + NumberOfPageContent));
        }

        return { pages };
    };

    // const percent = calculatePercentage(created_at as string, expiration_date as string);

    const NumberOfPageContent = 10;
    const { pages } = makePages(TableMockDatas, NumberOfPageContent);
    console.log(pages);

    return (
        <S.Table>
            {/* T-HEAD */}
            <thead>
                <S.Thead.TR>
                    {thead_items.map((item) => (
                        <S.Thead.TH key={item.id}>{item.title}</S.Thead.TH>
                    ))}
                </S.Thead.TR>
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
                                {page.map((content) => (
                                    <tr>
                                        <td>{content.url}</td>
                                        <td>{content.certificate}</td>
                                        <td>{content.expiration_date}</td>
                                        <td>{content.is_active}</td>
                                        <td>Progress</td>
                                    </tr>
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
