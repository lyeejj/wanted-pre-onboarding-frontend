import { Link } from "react-router-dom";
import useInputs from "../hooks/useInputs";
import { signin } from "../lib/apis/auth";

const SignIn = () => {
  const initialValue = { email: "", password: "" };

  const { formData, handleChange, reset } = useInputs(initialValue);
  const { email, password } = formData;

  const validateBtn = !(email.includes("@") && password.length >= 8);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signin(formData);
    reset();
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleLoginSubmit}>
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
      </form>
      <span>게정이 없으신가요?</span>
      <span>
        <Link to="/signup">회원가입 하러가기</Link>
      </span>
    </>
  );
};

export default SignIn;
