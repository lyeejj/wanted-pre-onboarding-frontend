import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { logout } from "../../lib/apis/auth";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate("/signin");
  };

  return (
    <Container>
      <Header>
        <h1>TodoApp</h1>
        {isLoggedIn && (
          <UserIcon>
            <FaRegUser onClick={() => setShowDropdown((prev) => !prev)} />
            {showDropdown && (
              <Dropdown>
                <ul>
                  <li onClick={handleLogout}>로그아웃</li>
                </ul>
              </Dropdown>
            )}
          </UserIcon>
        )}
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

const UserIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 80px;
  font-size: 1rem;
  padding: 6px 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export default MainLayout;
