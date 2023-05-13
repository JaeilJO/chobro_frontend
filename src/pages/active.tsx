import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import { useAppDispatch } from '../redux/hooks';
import AuthModal from '../components/modals/AuthModal';

const Active: NextPage = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <Header />
        </>
    );
};

export default Active;
