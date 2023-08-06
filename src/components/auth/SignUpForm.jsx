import useInputs from "../../hooks/useInputs";
import { signup } from "../../lib/apis/auth";
import * as S from "./FormStyles";

const SignUpForm = () => {
  const initialValue = { email: "", password: "" };
  const { formData, handleChange, reset } = useInputs(initialValue);
  const { email, password } = formData;

  const validateBtn = !(email.includes("@") && password.length >= 8);

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signup(formData);
    reset();
  };
  return (
    <S.FormTemplate>
      <S.FormWrapper onSubmit={handleSignUpSubmit}>
        <S.FormTitle>회원가입</S.FormTitle>
        <S.FormInputDiv>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="이메일 아이디"
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="비밀번호"
          />
          <button data-testid="signup-button" disabled={validateBtn}>
            회원가입
          </button>
        </S.FormInputDiv>
        <S.StyledLink to="/signin">
          이미 계정이 있으신가요? <span>로그인하기</span>
        </S.StyledLink>
      </S.FormWrapper>
    </S.FormTemplate>
  );
};

export default SignUpForm;
