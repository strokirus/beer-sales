import styled, {
  createGlobalStyle,
} from 'styled-components';

import {
  colors,
} from './variables';

import { breakpoints } from '../helpers/breakpoints';

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

  .flex-container {
    display: flex;
    flex-wrap: wrap;
  }  

  .total-cart {
    text-align: right;
    font-size: 14px;
    padding: 10px 10px;
    color: #ec6f13;
  }

  .checkout-button {
    margin-top: 10px;
    width: 90%;
    margin: 10px auto 0 auto;
    background-color: #ec6f13;
    border: none;
    text-decoration: none;
    text-align: center;
    color: #FFF;
    padding: 10px;
    display: block;
    font-size: 16px;
    font-weight: 500;
  }

  #checkout #cart-products {
    width: 100%;
    position: relative;

    .total-cart {
      padding: 10px 5px;
      font-size: 26px;
    }

    @media (max-width: ${breakpoints.small}) {
      > article {
        max-height: inherit;
      }
    } 

    .item-cart-product {
      display: grid;
      padding-bottom: 0 !important;
      grid-template-columns: 33% 33% 33%;
      grid-template-rows: auto auto auto;
      > p, > section {
        padding: 30px 0 0 0;
      }
      > header {
        border-bottom: none;
        padding: 10px 0;
        margin-bottom: 0;
      }
    }
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
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
  margin-bottom: 10px;
  line-height: 60px;
  height: 60px;
  display: grid;
  grid-template-columns: 20% 75%;
  grid-template-rows: auto auto;
  background-color:
    ${({ theme }) => (theme.mode === 'dark' ? `${colors.dark}` : `${colors.white}`)};
  
  > h1 {
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: 40% 60%;
  }
`;

export const ContentProducts = styled.article`
  width: 73%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto auto auto auto;
  padding: 15px 10px;
  font-size: 10px;

  @media (max-width: ${breakpoints.small}) {
    width: 95%;
    margin-bottom: 150px;
    grid-template-columns: 50% 50%; 
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

export const SectionWrapper = styled.section`
  position: relative;
  padding-bottom: 150px;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  .checkout {
    border: 1px solid red;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
  }  
`;

export const CartProduct = styled.article`
  width: 20%;
  grid-template-rows: auto;
  padding: 15px 10px;
  font-size: 10px;

  @media (max-width: ${breakpoints.small}) {
    width: 98%;
    padding: 10px 3px;
    position: fixed;
    bottom: 0;
    z-index: 2;
    background-color:
      ${({ theme }) => (theme.mode === 'dark' ? `${colors.black}` : `${colors.white}`)};

    > article {
      max-height: 160px;
      overflow-y: scroll;
    }
  }  
`;

export default {
  GlobalStyle,
  MainHeader,
  SectionWrapper,
  MainFooter,
  ContentProducts,
  CartProduct,
};
