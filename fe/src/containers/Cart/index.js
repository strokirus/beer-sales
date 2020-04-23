import React, { Component } from 'react';
import { object, func, element } from 'prop-types';
import { connect } from 'react-redux';

import {
  addToCart,
  removeToCart,
} from './actions';

import {
  CartProduct,
} from '../../cssGlobals/globals';

import ProductCart from '../../components/ProductCart';

/**
 * Cart Container
*/
class Cart extends Component {
  handleRemoveCart = (e) => {
    const {
      removeToCart: removeToCartProps,
    } = this.props;

    removeToCartProps(e);
  }

  handleAddCart = (e) => {
    const {
      addToCart: addToCartProps,
    } = this.props;

    addToCartProps(e);
  }

  render() {
    const {
      cart,
      children,
    } = this.props;

    const {
      items,
      formatTotal,
    } = cart;

    return (
      <>
        <CartProduct
          id="cart-products"
        >
          <h1
            style={{
              padding: '4px 8px',
            }}
          >
            Cart
          </h1>
          <article>
            {items.map((item) => (
              <ProductCart
                key={item.id}
                item={item}
                addCart={this.handleAddCart}
                removeCart={this.handleRemoveCart}
              />
            ))}
          </article>
          <p
            className="total-cart"
          >
            {`Total: ${formatTotal}`}
          </p>
          {items.length > 0 && children}
        </CartProduct>
      </>
    );
  }
}

Cart.propTypes = {
  cart: object,
  addToCart: func.isRequired,
  removeToCart: func.isRequired,
  children: element,
};

Cart.defaultProps = {
  cart: { },
  children: <></>,
};

function mapStateToProps(state, ownProps) {
  const {
    cart,
  } = state;

  return {
    ...ownProps,
    cart,
  };
}

const mapDispatchToProps = {
  addToCart,
  removeToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
