import styled from 'styled-components';

import {
  colors,
} from '../../cssGlobals/variables';

import { breakpoints } from '../../helpers/breakpoints';

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

  a {
    text-decoration: none;
  }
  
  h1 {
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: 40% 60%;
  }
`;

export default {
  MainHeader,
};
