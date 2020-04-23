import styled from 'styled-components';

export const Input = styled.input`
  width: 60%;
  outline: none;
  height: 15px;
  margin-top: 13px;
  padding: 8px 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Label = styled.label`
  font-size: 0;
`;

export default {
  Input,
  Label,
};
