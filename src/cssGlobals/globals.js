import styled, {
  createGlobalStyle,
} from 'styled-components';

import {
  colors,
} from './variables';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    font: 16px Heebo,-apple-system,BlinkMacSystemFont,Segoie UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    letter-spacing: .3px;
    line-height: 1.5;
    margin:0;
    padding:0;
    height: 100%;      
    background-color:
      ${({ theme }) => (theme.mode === 'dark' ? `${colors.black}` : `${colors.white}`)};
    color:
      ${({ theme }) => (theme.mode === 'dark' ? `${colors.white}` : `${colors.black}`)};
  }

  #app {
    position: relative;
    min-height: 100%;
  }

  a {
    color:
      ${({ theme }) => (theme.mode === 'dark' ? `${colors.white}` : 'inherit')};
  }

  button {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 600;
    transition: opacity 0.3s ease 0s;
    outline: none;
    border: 1px solid #1B1B1B;
    margin-right: 10px;
    background-color:
      ${({ theme }) => (theme.mode === 'dark' ? `${colors.white}` : `${colors.dark}`)};
    color:
      ${({ theme }) => (theme.mode === 'dark' ? `${colors.dark}` : `${colors.white}`)};
  }
`;

export const MainHeader = styled.header`
  padding: 0 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
  margin-bottom: 10px;
  line-height: 60px;
  height: 60px;
  background-color:
    ${({ theme }) => (theme.mode === 'dark' ? `${colors.dark}` : `${colors.white}`)};
  
  > h1 {
    font-size: 20px;
  }
`;

export const MainFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 0;
  display: flex;
  flex-start: end;
  width: 100%;
  justify-content: center;

  > .about {
    flex: 0 0 48%;
    width: 48%;
    text-align: center;

    > a {
      margin-left: 5px;
    }
  }

  > .toggle {
    flex: 0 0 48%;
    width: 48%;
    text-align: center;
  }
`;

export default {
  GlobalStyle,
  MainHeader,
  MainFooter,
};
