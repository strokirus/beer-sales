import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import {
  Link,
} from "react-router-dom";

import {
  MainHeader,
  SectionWrapper,
} from '../../cssGlobals/globals';

import Search from '../../containers/Search/';
import Products from '../../containers/Products/';
import Cart from '../../containers/Cart/';

/**
 * Search Container
*/
class SearchPage extends Component {
  /**
   * Trigged by change text search and check with value is valid by cep mask
   * @param event Event passed by user changes values
  */
  render() {
    const { term } = this.props;

    return (
      <>
        <MainHeader>
          <h1>Beer Store</h1>
          <Search
            term={term}
          />
        </MainHeader>
        <SectionWrapper>
          <Products
            term={term}
          />
          <Cart>
            <Link
              to="/checkout"
              className="checkout-button"
            >
              Checkout
            </Link>
          </Cart>
        </SectionWrapper>
      </>
    );
  }
}

SearchPage.propTypes = {
  term: string.isRequired,
};

SearchPage.defaultProps = {
  term: '',
};

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
