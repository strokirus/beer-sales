import React from 'react';
import { string, func } from 'prop-types';

import {
  Input,
} from './styles';

/**
 * Component to Input Search
 * @param text Object with product info
 * @param onChangeText Function to Add Product in Cart
 * @param onKeyChange Function to Add Product in Cart
*/
const InputSearch = ({ text, onChangeText, onKeyChange }) => {
  return (
    <Input
      type="text"
      id="search-box"
      value={text}
      onChange={e => onChangeText(e)}
      onKeyUp={e => onKeyChange(e)}
    />    
  );
};

InputSearch.propTypes = {
  text: string,
  onKeyChange: func,
  onChangeText: func,
};

InputSearch.defaultProps = {
  text: string,
  onKeyChange: () => {},
  onChangeText: () => {},
};

export default InputSearch;
