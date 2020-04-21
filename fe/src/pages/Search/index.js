import React, { Component } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

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
  render() {
    const { term } = this.props;
    console.log(term);

    return (
      <>
        <MainHeader>
          <h1>Beer Store</h1>
          <Search />
        </MainHeader>
        <SectionWrapper>
          <Products />
          <Cart />
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
