import React from 'react';
import { string, func } from 'prop-types';

import {
  Input,
  Label,
} from './styles';

/**
 * Component to Input Search
 * @param text Object with product info
 * @param onChangeText Function to Add Product in Cart
 * @param onKeyChange Function to Add Product in Cart
*/
const InputSearch = ({ text, onChangeText, onKeyChange }) => (
  <>
    <Input
      type="text"
      id="search-box"
      value={text}
      placeholder="Search your beer here..."
      onChange={(e) => onChangeText(e)}
      onKeyUp={(e) => onKeyChange(e)}
    />
    <Label
      htmlFor="search-box"
    >
      Search your beers MainHeader
    </Label>
  </>
);

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
