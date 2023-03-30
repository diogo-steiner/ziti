import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

  :root {
    --c-primary: #1C9EED;
    --c-primary-hover:   #31A3E9;
    --c-primary-opacity: #1C9EED20;
    --c-secondary: #40B4FF;
    --c-gray-100: #172027;
    --c-gray-200: #31414B;
    --c-gray-300: #9F9F9F;
    --c-gray-400: #D3D3D3;
    --c-gray-500: #D6D6D6;
    --c-gray-600: #EFEFEF;
    --c-gray-700: #F7F7F7;
    --c-white: #FFFFFF;

    --c-negative: #F70000;

    --f-size-1: 0.625rem;    
    --f-size-2: 0.75rem;    
    --f-size-3: 0.875rem;    
    --f-size-4: 1rem;    
    --f-size-5: 1.125rem;    
    --f-size-6: 1.5rem;

    --f-weight-1: 700;
    --f-weight-2: 600; 
    --f-weight-3: 500;
    --f-weight-4: 400;
    --f-weight-5: 300;
    --f-weight-6: 200;

    --b-radius-1: 0.5rem;

    --shadow: 0 0 32px rgba(0, 0, 0, 0.05);
  }


  html {
    font-size: 87.5%;

    @media screen and (min-width: 768px) {
      font-size: 93.75%;
    }

    @media screen and (min-width: 1024px) {
      font-size: 100%;
    }
  }

  body {
    background-color: var(--c-gray-700);
  }

  
  body, textarea, button {
    color: var(--c-gray-100);
    font-family: 'Roboto', sans-serif;
  }
`;
