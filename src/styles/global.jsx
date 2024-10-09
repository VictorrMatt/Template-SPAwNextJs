import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    color: ${({ theme }) => theme.COLORS.TEXT_1};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: "Roboto Serif";
    font-size: 2.9rem; /* 29px */
    font-weight: 200;
    height: 100%;
    width: 100vw;
/*     overflow-X: hidden;
 */  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.TEXT_2};

    &:hover, &:active {
      text-decoration: underline;
    }
  }

  span {
    font-weight: 200;
  }
`;
