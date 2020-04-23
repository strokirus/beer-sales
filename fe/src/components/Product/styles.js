import styled from 'styled-components';
import {
  colors,
} from '../../cssGlobals/variables';

export const SectionProduct = styled.section`
    box-shadow: rgba(0,0,0,0.15) 0px 2px 4px 0px;
    border-radius: 5px;
    text-align: center;
    margin: 10px 5px;
    padding-bottom: 10px;
    background-color:
        ${({ theme }) => (theme.mode === 'dark' ? `${colors.dark}` : `${colors.white}`)};

    &:hover {
        box-shadow: 0px 0px 7px 0px rgba(50,50,50,0.2);
    }
`;

export const BoxImage = styled.section`
    padding: 10px;
    border-radius: 5px 5px 0 0;
    background-color: #FFF;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    height: 100px;
    display: table;

    > img {
        display: table-cell;
        vertical-align: middle;
        width: 65%;
        margin: 0 auto;
    }
`;

export const Header = styled.header`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    line-height: 15px;
    height: 60px;
    margin-bottom: 10px;
    position: relative;
    display: table;
    vertical-align: middle; 
    width: 100%;  

    > h1 {
        width: 100%;
        text-align: left;
        padding: 0 10px;
        text-overflow: ellipsis;
        word-break: break-word;
        overflow: hidden;
        font-size: 14px;
        font-weight: 400;
        color:
            ${({ theme }) => (theme.mode === 'dark' ? `${colors.white}` : `${colors.dark}`)};

        display: table-cell;
        vertical-align: middle;
    } 
`;

export const Button = styled.button`
    margin-top: 10px;
    width: 90%;
    margin: 10px auto 0 auto;
    background-color: #ec6f13;
    border: none;
    color: ${colors.white};

`;

export const PriceBox = styled.p`
    font-size: 21px;
    text-align: right;
    padding: 0 10px;
    color: #ec6f13;
`;

export default {
  SectionProduct,
  BoxImage,
  Header,
  Button,
  PriceBox,
};
