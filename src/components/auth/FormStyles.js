import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormTemplate = styled.div`
  padding: 20px;
  margin: 8rem auto;
  max-width: 640px;
  height: 50vh;
  background-color: #fff;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const FormTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  input {
    width: 80%;
    height: 36px;
    padding: 0 16px;
    border: 1px solid #ccc;
  }

  button {
    width: 80%;
    padding: 10px 20px;
    margin-bottom: 2rem;
    background-color: ${(props) => props.theme.colors.green};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export const StyledLink = styled(Link)`
  span {
    color: #1fb845;
    font-size: 14px;
  }
  font-size: 14px;
`;
