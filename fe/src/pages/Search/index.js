import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';

import {
  SectionWrapper,
} from '../../cssGlobals/globals';

import Products from '../../containers/Products';
import Cart from '../../containers/Cart';

import Header from '../../components/Header';

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
        <Header
          term={term}
        />
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
  term: string,
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
