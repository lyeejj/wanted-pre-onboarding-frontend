import useInputs from "../../hooks/useInputs";
import { signin } from "../../lib/apis/auth";
import * as S from "./FormStyles";

const SignInForm = () => {
  const initialValue = { email: "", password: "" };

  const { formData, handleChange, reset } = useInputs(initialValue);
  const { email, password } = formData;

  const validateBtn = !(email.includes("@") && password.length >= 8);

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      await signin(formData);
      reset();
    } catch (error) {
      if (error.response) {
        alert("로그인 정보가 올바르지 않습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <S.FormTemplate>
      <S.FormWrapper onSubmit={handleLoginSubmit}>
        <S.FormTitle>로그인</S.FormTitle>
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
          <button data-testid="signin-button" disabled={validateBtn}>
            로그인
          </button>
        </S.FormInputDiv>
        <S.StyledLink to="/signup">
          게정이 없으신가요? <span>회원가입하기</span>
        </S.StyledLink>
      </S.FormWrapper>
    </S.FormTemplate>
  );
};

export default SignInForm;
