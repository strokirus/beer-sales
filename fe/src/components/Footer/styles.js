import styled from 'styled-components';

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
  MainFooter,
};
