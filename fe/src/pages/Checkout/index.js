import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  SectionWrapper,
} from '../../cssGlobals/globals';

import Cart from '../../containers/Cart';

import Header from '../../components/Header';

/**
 * CheckoutPage Container
*/
class CheckoutPage extends Component {
  render() {
    return (
      <>
        <Header />
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
