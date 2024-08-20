import { createGlobalStyle, css } from "styled-components";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const GlobalStyle = createGlobalStyle`${globalStyles}`;