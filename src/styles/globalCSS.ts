import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  button {
    background: brown;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s linear;
    &:hover{
      opacity: 0.8;
    }
  }
`;
