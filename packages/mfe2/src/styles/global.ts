import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.background};
    @media (min-width: 1981px) {
      font-size: 80%;
    };
  }

  html, body, #root{
    height: 100%;
  }

  body {
    height: auto;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    font-size: ${({ theme }) => theme.font.sizes.small}
  }

  a {
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: .6;
    }
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  body, input, button, textarea{
    font-family: sans-serif, -apple-system, BlinkMacSystemFont, 'Gotham', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-size: ${({ theme }) => theme.font.sizes.small}
  }
`;
