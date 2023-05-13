import { FontSizeType } from '../../../styles/theme';

export interface AuthInpuProps {
    type: 'email' | 'password' | 'text';
    placeholder: string;
}
