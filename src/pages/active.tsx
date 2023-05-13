import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import { useAppDispatch } from '../redux/hooks';
import AuthModal from '../components/modals/AuthModal';
import Table from '../components/organisms/Table';

const Active: NextPage = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Header />
            <Table />
        </>
    );
};

export default Active;
