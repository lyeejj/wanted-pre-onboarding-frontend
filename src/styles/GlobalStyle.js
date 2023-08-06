import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
      text-decoration: none;
      color: inherit;
  }
  ol, ul {
  list-style: none;
  }
  button{
    background: transparent;
    border: none;
    cursor: pointer;
    outline: inherit;
  }
`;

export default GlobalStyle;
