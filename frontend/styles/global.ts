import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    colorPrimary: '#302E53',
    colorSecundary: '#1E2022',
    colorActive: '#D07017',
    backgroundPrimary: '#FFFFFF'
  }
}

// font-family: 'Roboto Condensed', sans-serif;

export { GlobalStyle, theme };