import AuthInput from '../../atoms/AuthInput';
import Button from '../../atoms/Button';
import NavigationLink from '../../atoms/NavigationLink';
import S from './index.styled';

const LoginForm = () => {
    return (
        <S.LoginForm>
            <S.FormTitle>LOGIN</S.FormTitle>
            {/* E-mail Input */}
            <AuthInput type="email" placeholder="E-mail" />

            {/* Password Input */}
            <AuthInput type="password" placeholder="Password" />

            {/* Login Button */}
            <Button is_loading={false} font_size="XXL" text="LOGIN" outline={false} />

            <S.FormSeparator>or</S.FormSeparator>

            <Button is_loading={false} font_size="XXL" text="Google Login" outline={true} />
            <S.SignUpPormpt>
                <S.SignUpPormptText>Don't have an account?</S.SignUpPormptText>
                <S.SignUpPormptButton>Sign up</S.SignUpPormptButton>
            </S.SignUpPormpt>
        </S.LoginForm>
    );
};

export default LoginForm;
