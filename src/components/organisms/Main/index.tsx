import Table from '../Table';
import S from './index.styled';

const Main = ({ main_title, table_data }) => {
    return (
        <S.Main>
            <S.MainTitle>{main_title}</S.MainTitle>
            <Table table_data={table_data} />
        </S.Main>
    );
};

export default Main;
