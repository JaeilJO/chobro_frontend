import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Main from '../components/organisms/Main';
import TableMockDatas from '../components/organisms/Table/TableMockDatas';
import AuthModal from '../components/modals/AuthModal';

const Active: NextPage = () => {
    const dispatch = useAppDispatch();
    const authMode = useAppSelector((state) => state.modal.authMode);
    const headerLoginButtonModal = useAppSelector((state) => state.modal.headerLoginButtonModal);
    return (
        <>
            <Header />
            <Main main_title="Active Access Certificate" table_data={TableMockDatas} />

            {}
            {headerLoginButtonModal ? <AuthModal mode={authMode} /> : null}
        </>
    );
};

export default Active;
