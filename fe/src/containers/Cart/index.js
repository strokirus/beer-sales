import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';

import {
  addToCart,
  removeToCart,
} from './actions';

/**
 * Cart Container
*/
class Cart extends Component {
  handleRemoveCart = e => {
    const {
      removeToCart,
    } = this.props;

    removeToCart(e);
  }

  handleAddCart = e => {
    const {
      addToCart,
    } = this.props;

    addToCart(e);
  }
    
  render() {
    const {
      cart,
    } = this.props;

    const {
      items,
      formatTotal,
    } = cart;

    return (
      <>
        <article
          id="cart-products"
          style={{
            width: '20%',
            gridTemplateRows: 'auto',
            padding: '15px 10px',
            fontSize: '10px'
          }}
        >
          <h1>Cart</h1>
          {items.map(e => (
            <section
              className="item-cart-product"
              key={e.id}
              style={{
                boxShadow: 'rgba(0,0,0,0.15) 0px 2px 4px 0px',
                border: '1px solid rgba(0,0,0,0.15)',
                borderRadius: '10px',
                textAlign: 'center',
                margin: '10px 5px',
                paddingBottom: '10px',
              }}
              alt={e.name}
              title={e.name}
            >
              <h1
                style={{
                  borderBottom: '1px solid rgba(0,0,0,0.15)',
                  textAlign: 'left',
                  textOverflow: 'ellipsis',
                  wordBreak: 'bread-word',
                  overflow: 'hidden',
                  padding: '10px 15px',
                  fontSize: '14px',
                  fontWeight: '700',
                  marginBottom: '10px',
                  color: '#363636',
                }}
                title={e.name}
              >
                {e.name}
              </h1>

              <p>{`Qtd: ${e.qtd}`}</p>
              <button
                className="add-qtd"
                type="button"
                onClick={a => this.handleAddCart(e, a)}
              >{`+`}</button>              
              <button
                className="remove-qtd"
                type="button"
                onClick={a => this.handleRemoveCart(e, a)}
              >{`-`}</button>
            </section>
          ))}
          <p
            className="total-cart"
          >
            {`Total: ${formatTotal}`}
          </p>

          <button
            type="button"
            onClick={() => { location.href = "/checkout"; }}
          >
            Checkout
          </button>
        </article>
      </>
    );
  }
}

Cart.propTypes = {
  cart: object,
  addToCart: func.isRequired,
  removeToCart: func.isRequired,
};

Cart.defaultProps = {
  cart: { },
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
