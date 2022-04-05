import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-red: hsl(7, 99%, 70%);
    --col-yellow:hsl(51, 100%, 49%);
    --col-graphic-design-text:hsl(167, 40%, 24%);
    --col-photography-text: hsl(198, 62%, 26%);
    --col-footer:hsl(168, 34%, 41%);
    --col-white:hsl(0, 0%, 100%);
    --col-grayish-blue:hsl(210, 4%, 67%);
    --col-dark-grayish-blue:hsl(232, 10%, 55%);
    --col-very-dark-grayish-blue:hsl(213, 9%, 39%);
    --col-desaturated-blue:hsl(212, 27%, 19%);

    --font-primary: 'Barlow', sans-serif;
    --font-secondary: 'Fraunces', serif;

    --height-header: 8rem;
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  ::-webkit-scrollbar{
    width: 1.8rem;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--col-very-dark-grayish-blue);
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--col-red);
    border-radius: 10rem;
  }

  body{
    min-height: 100vh;
    font: 18px;
    font-family: var(--font-primary);
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }

  }

  h1,h2,h3{
    font-family: var(--font-secondary);
    font-weight: 900;
  }


`;

export default GlobalStyle;
