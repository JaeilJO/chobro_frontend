import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { changeMode } from '../../../redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useLoginMutation } from '../../../redux/services/authApi';
import AuthInput from '../../atoms/AuthInput';
import Button from '../../atoms/Button';
import NavigationLink from '../../atoms/NavigationLink';
import S from './index.styled';
import { setUser } from '../../../redux/features/userSlice';
import { HasEmptyFileds, HasSpacingInPassword, IsLoginStatusTrue } from '../../../utils/utils';

const LoginForm = () => {
    const dispatch = useAppDispatch();

    const [login, { data, error, isLoading }] = useLoginMutation();

    const changeModeHandler = () => {
        dispatch(changeMode('signup'));
    };

    // for reactHookForm
    const { handleSubmit, control } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const loginState = useAppSelector((state) => state.user.isLoggedIn);

    const onSubmit: SubmitHandler<{ username: string; password: string }> = async (userInfo) => {
        try {
            HasEmptyFileds(userInfo);
            HasSpacingInPassword(userInfo);
            IsLoginStatusTrue(loginState);
            const data = await login(userInfo);
            dispatch(setUser(data));
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <S.FormTitle>LOGIN</S.FormTitle>
            {/* E-mail Input */}

            <Controller
                control={control}
                name="username"
                render={({ field: { onChange } }) => (
                    <AuthInput type="email" placeholder="E-mail" on_change={onChange} />
                )}
            />

            {/* Password Input */}
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange } }) => (
                    <AuthInput type="password" placeholder="Password" on_change={onChange} />
                )}
            />

            {/* Login Button */}
            <Button is_loading={isLoading} font_size="XXL" text="LOGIN" outline={false} />

            <S.FormSeparator>or</S.FormSeparator>

            <Button font_size="XXL" text="Google Login" outline={true} />
            <S.SignUpPormpt>
                <S.SignUpPormptText>Don't have an account?</S.SignUpPormptText>
                <S.SignUpPormptButton onClick={changeModeHandler}>Sign up</S.SignUpPormptButton>
            </S.SignUpPormpt>
        </S.LoginForm>
    );
};

export default LoginForm;
