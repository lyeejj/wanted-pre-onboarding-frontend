import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <h1>로그인</h1>
      <form>
        <input data-testid="email-input" type="email" />
        <input data-testid="password-input" type="password" />
        <input data-testid="signin-button" type="submit" value={"로그인"} />
      </form>
      <span>
        <Link to="/signup">회원가입 하러가기</Link>
      </span>
    </>
  );
};

export default SignIn;
