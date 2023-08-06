import { Link } from "react-router-dom";
import useInputs from "../hooks/useInputs";
import { signup } from "../lib/apis/auth";

const SignUp = () => {
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
    <>
      <h1>회원가입</h1>
      <form onSubmit={handleSignUpSubmit}>
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
      </form>
      <span>이미 계정이 있으신가요?</span>
      <span>
        <Link to="/signin">로그인</Link>
      </span>
    </>
  );
};

export default SignUp;
