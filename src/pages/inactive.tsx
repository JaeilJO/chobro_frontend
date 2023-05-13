import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import { useAppDispatch } from '../redux/hooks';

import Main from '../components/organisms/Main';
import TableMockDatas from '../components/organisms/Table/TableMockDatas';

const Active: NextPage = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Header />
            <Main main_title="Inactive Access Certificate" table_data={TableMockDatas} />
        </>
    );
};

export default Active;
