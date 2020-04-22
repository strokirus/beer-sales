import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  MainHeader,
  SectionWrapper,
} from '../../cssGlobals/globals';

import Search from '../../containers/Search/';
import Cart from '../../containers/Cart/';

/**
 * CheckoutPage Container
*/
class CheckoutPage extends Component {
  render() {
    return (
      <>
        <MainHeader>
          <h1>Beer Store</h1>
          <Search />
        </MainHeader>
        <SectionWrapper
          id="checkout"
        >
          <Cart />
        </SectionWrapper>
      </>
    );
  }
}

CheckoutPage.propTypes = {
};

CheckoutPage.defaultProps = {
};

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
