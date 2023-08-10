import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Home = () => {
  return (
    <>
      <StyledLink to="/signin">
        <span>시작하기</span>
      </StyledLink>
    </>
  );
};

const StyledLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;

  span {
    padding: 16px 20px;
    transition: 0.3s ease-in-out;
    border: 1px solid #2a2a2a;
    border-radius: 6px;

    &:hover {
      border: none;
      background-color: #1fb845;
      color: #fff;
    }
  }
`;

export default Home;
