import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    padding-top: 80px; /* Por causa do header fixo */
  }

  html {
    scroll-behavior: smooth;
  }
`;