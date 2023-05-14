import { useAppDispatch } from '../redux/hooks';
import { useLogoutQuery } from '../redux/services/authApi';

export const loginModalDropDownItems: DropDownData[] = [
    {
        id: 1,
        text: 'Logout',
        type: 'logout',
    },
];
