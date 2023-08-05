import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h1>회원가입</h1>
      <form>
        <input data-testid="email-input" type="email" />
        <input data-testid="password-input" type="password" />
        <input data-testid="signup-button" type="submit" value={"회원가입"} />
      </form>
      <span>
        <Link to="/signin">로그인하기</Link>
      </span>
    </>
  );
};

export default SignUp;
