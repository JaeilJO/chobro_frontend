import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { changeMode } from '../../../redux/features/modalSlice';
import { useAppDispatch } from '../../../redux/hooks';
import AuthInput from '../../atoms/AuthInput';
import Button from '../../atoms/Button';
import NavigationLink from '../../atoms/NavigationLink';
import S from './index.styled';
import { useSignUpMutation } from '../../../redux/services/userApi';

const SignUpForm = () => {
    const dispatch = useAppDispatch();
    const [signUp] = useSignUpMutation();

    const changeModeHandler = () => {
        dispatch(changeMode('login'));
    };

    //react hook form
    const { handleSubmit, control } = useForm({
        defaultValues: {
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            source: 'Local',
        },
    });

    const onSubmit: SubmitHandler<{ username: string; firstName: string; lastName: string; password: string }> = async (
        userInfo
    ) => {
        const res = await signUp(userInfo);
        if ('data' in res) {
            dispatch(changeMode('login'));
        } else {
            throw new Error('회원가입안됨')
        }
    };
    return (
        <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
            <S.FormTitle>SignUp</S.FormTitle>

            <Controller
                control={control}
                name={'firstName'}
                render={({ field: { onChange } }) => (
                    <AuthInput on_change={onChange} type="text" placeholder="First Name" />
                )}
            />

            {/* Password Input */}

            <Controller
                control={control}
                name={'lastName'}
                render={({ field: { onChange } }) => (
                    <AuthInput on_change={onChange} type="text" placeholder="Last Name" />
                )}
            />

            {/* Email Input */}

            <Controller
                control={control}
                name={'username'}
                render={({ field: { onChange } }) => (
                    <AuthInput on_change={onChange} type="email" placeholder="E-mail" />
                )}
            />

            {/* Password Input */}
            <Controller
                control={control}
                name={'username'}
                render={({ field: { onChange } }) => (
                    <AuthInput on_change={onChange} type="password" placeholder="Password" />
                )}
            />

            {/* Login Button */}
            <Button is_loading={false} font_size="XXL" text="SignUp" outline={false} />

            <S.FormSeparator>or</S.FormSeparator>

            <S.SignUpPormpt>
                <S.SignUpPormptText>Do you already have an account?</S.SignUpPormptText>
                <S.SignUpPormptButton onClick={changeModeHandler}>Login</S.SignUpPormptButton>
            </S.SignUpPormpt>
        </S.SignUpForm>
    );
};

export default SignUpForm;
