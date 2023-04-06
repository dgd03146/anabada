import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard Regular';
  src: url('/assets/fonts/Pretendard-Regular.otf') format('opentype');
}

*{
   box-sizing: border-box;
   }

 body {
    margin: 0px;
    padding: 0px; 
    font-family: 'Pretendard Regular', sans-serif;
 }

 input, button, select, textarea, pre, span {
  font-family: inherit;
}


 a, div {
    text-decoration: none;
    color:inherit;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
  }
  a{
    cursor: pointer;
  }

  button{
   cursor: pointer;
   outline: none;
   border: none;
   background-color: transparent;
  
  }
  
  ul{
   padding-left: 0;
   list-style: none;
  }
  
  h2,p{
   margin: 0;
  }

  select{
   border: none;
   outline: none;
  }

  input{
   border: none;
  }

  input:focus-visible {
      outline: 0.01rem solid #007aff;     
    }

    

`;

export default GlobalStyle;
