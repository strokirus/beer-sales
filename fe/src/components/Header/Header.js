import React from 'react';
import { string } from 'prop-types';
import {
  Link,
} from 'react-router-dom';

import {
  MainHeader,
} from './styles';

import Search from '../../containers/Search';

/**
 * Component to Header
 * @param term Term to Search
*/
const Header = ({ term }) => (
  <MainHeader>
    <Link
      to="/"
    >
      <h1>Beer Store</h1>
    </Link>
    <Search
      term={term}
    />
  </MainHeader>
);

Header.propTypes = {
  term: string,
};

Header.defaultProps = {
  term: '',
};

export default Header;
