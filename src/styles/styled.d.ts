import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      royal: string;
      vibrant: string;
      dark: string;
      white: string;
      gray: string;
      text: string;
      background: string;
      cardBg: string;
      headerBg: string;
      footerBg: string;
      border: string;
      fadeWhite: string;  
    };
    breakpoints: {
      mobile: string;
      tablet: string;
    };
  }
}