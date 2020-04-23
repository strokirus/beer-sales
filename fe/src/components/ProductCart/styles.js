import styled from 'styled-components';

export const ItemCart = styled.section`
    box-shadow: rgba(0,0,0,0.15) 0px 2px 4px 0px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 5px;
    text-align: center;
    margin: 10px 5px;
    padding-bottom: 10px;
`;

export const SectionBody = styled.section`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 10px;
`;

export const Commands = styled.section`
    display: grid;
    grid-template-columns: 25% 25% 50%;
    margin-bottom: 10px;
    text-align: center;

    > button {
        margin: 0 auto;
    }
`;


export default {
  ItemCart,
  SectionBody,
  Commands,
};
