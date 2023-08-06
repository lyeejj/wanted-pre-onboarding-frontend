import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const goTodo = () => {
    navigate("/todo");
  };
  return (
    <Container>
      <Header>
        <h1>TodoApp</h1>
        <Navbar>
          <ul>
            <li onClick={goHome}>Home</li>
            <li onClick={goTodo}>Todo</li>
          </ul>
        </Navbar>
      </Header>
      {children}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  /* background-color: #e8f6d0; */
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 8rem;
  font-size: 1.3rem;
`;

const Navbar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      cursor: pointer;
    }
  }
`;

export default MainLayout;
