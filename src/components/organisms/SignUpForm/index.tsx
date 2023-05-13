import { useAppDispatch } from '../../../redux/hooks';
import AuthInput from '../../atoms/AuthInput';
import Button from '../../atoms/Button';
import NavigationLink from '../../atoms/NavigationLink';
import S from './index.styled';

const SignUpForm = () => {
    return (
        <S.SignUpForm>
            <S.FormTitle>SignUp</S.FormTitle>
            {/* FirstName Input */}
            <AuthInput type="text" placeholder="First Name" />

            {/* Password Input */}
            <AuthInput type="text" placeholder="Last Name" />

            {/* Email Input */}
            <AuthInput type="email" placeholder="E-mail" />

            {/* Password Input */}
            <AuthInput type="password" placeholder="Password" />

            {/* Login Button */}
            <Button is_loading={false} font_size="XXL" text="SignUp" outline={false} />

            <S.FormSeparator>or</S.FormSeparator>

            <S.SignUpPormpt>
                <S.SignUpPormptText>Do you already have an account?</S.SignUpPormptText>
                <S.SignUpPormptButton>Login</S.SignUpPormptButton>
            </S.SignUpPormpt>
        </S.SignUpForm>
    );
};

export default SignUpForm;
