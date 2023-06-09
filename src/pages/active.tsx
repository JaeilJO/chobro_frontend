import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Main from '../components/organisms/Main';
import TableMockDatas from '../components/organisms/Table/TableMockDatas';
import AuthModal from '../components/modals/AuthModal';
import { wrapper } from '../redux/store';
import { authApi } from '../redux/services/authApi';
import { setUser } from '../redux/features/userSlice';
import { useGetActiveCertQuery } from '../redux/services/userApi';
import { getActiveCert } from '../redux/features/certSlice';
import { useEffect } from 'react';
import ActiveButtonModal from '../components/modals/ActivButtonModal';

const Active: NextPage = () => {
    const dispatch = useAppDispatch();
    const authMode = useAppSelector((state) => state.modal.authMode);
    const headerLoginButtonModal = useAppSelector((state) => state.modal.headerLoginButtonModal);
    const accessToken: string = useAppSelector((state) => state.user.token);

    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const username = useAppSelector((state) => state.user.userName);
    const tableActiveModal = useAppSelector((state) => state.modal.tableActiveModal.toggle_status);

    const { isLoading, isSuccess, data } = useGetActiveCertQuery(accessToken, { skip: !accessToken });

    useEffect(() => {
        if (isSuccess) {
            dispatch(getActiveCert(data));
        }
    }, [isSuccess, data]);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} username={username} />
            <Main main_title="Active Access Certificate" table_data={data} />
            {!isLoggedIn && tableActiveModal ? <ActiveButtonModal /> : null}

            {!isLoggedIn && headerLoginButtonModal ? <AuthModal mode={authMode} /> : null}
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    const cookie = context.req.cookies;

    //refresh와  디코딩된 token얻어오기
    const tokens = await store.dispatch(authApi.endpoints.refresh.initiate(cookie.rt));

    //token없는 것에 대한 처리
    if (!tokens || !tokens.data) return { props: {} };

    //데이터 처리를 위한 준비
    const refreshToken = tokens.data?.refreshToken;
    const userData = {
        data: {
            userName: tokens.data?.userData.userName,
            exp: tokens.data?.userData.exp,
            token: tokens.data?.userData.token,
        },
    };

    store.dispatch(setUser(userData));
    context.res.setHeader('Set-Cookie', `rt=${refreshToken}; Path=/; HttpOnly`);

    return {
        props: {},
    };
});

export default Active;
