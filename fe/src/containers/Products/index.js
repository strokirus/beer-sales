import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchProducts,
} from './actions';

import {
  addToCart,
} from '../../containers/Cart/actions';

/**
 * Products Container
*/
class Products extends Component {
  /**
   * Trigged when user access Search Page
   * @param event Event passed by user changes values
  */
  componentDidMount = () => {
    const {
      fetchProducts: fetchProductsProps,
    } = this.props;

    fetchProductsProps();
  }

  handleAddCart = e => {
    const {
      addToCart,
    } = this.props;

    addToCart(e);
  }

  render() {
    const {
      products,
    } = this.props;

    const {
      items,
      status,
      term,
    } = products;

    if (status.isLoading) {
      return (
        <article
          id="content-products"
          style={{
            width: '73%',
            display: 'grid',
            gridTemplateColumns: '25% 25% 25% 25%',
            gridTemplateRows: 'auto auto auto auto',
            padding: '15px 10px',
            fontSize: '10px'
          }}
        >
          <h1>Loading...</h1>
        </article>
      );
    }

    if (status.isError) {
      return (
        <article
          id="content-products"
          style={{
            width: '73%',
            display: 'grid',
            gridTemplateColumns: '25% 25% 25% 25%',
            gridTemplateRows: 'auto auto auto auto',
            padding: '15px 10px',
            fontSize: '10px'
          }}
        >
          <h1>Something is rotten in the state of Denmark</h1>
          <p>Try contact the administrators of site</p>
        </article>
      );
    }

    if (items.length === 0) {
      return (
        <article
          id="content-products"
          style={{
            width: '73%',
            display: 'grid',
            gridTemplateColumns: '25% 25% 25% 25%',
            gridTemplateRows: 'auto auto auto auto',
            padding: '15px 10px',
            fontSize: '10px'
          }}
        >
          <p>No results</p>
        </article>
      );      
    }

    return (
      <>
        <h3
          style={{
            width: '100%',
            height: '30px',
            padding: '5px 15px',
          }}
        >      
          {term.length > 0 &&
            `Found ${items.length} for "${term}"`
          }
        </h3>
        <article
          id="content-products"
          style={{
            width: '73%',
            display: 'grid',
            gridTemplateColumns: '25% 25% 25% 25%',
            gridTemplateRows: 'auto auto auto auto',
            padding: '15px 10px',
            fontSize: '10px'
          }}
        >
          {items.map(item => (
            <section
              className="item-product"
              key={items.id}
              style={{
                boxShadow: 'rgba(0,0,0,0.15) 0px 2px 4px 0px',
                border: '1px solid rgba(0,0,0,0.15)',
                borderRadius: '10px',
                textAlign: 'center',
                margin: '10px 5px',
                paddingBottom: '10px',
              }}
              alt={item.name}
              title={item.name}
            >
              {item.labels && item.labels.medium &&
                <section
                  style={{
                    padding: '10px',
                    borderRadius: '10px 10px 0 0',
                    backgroundColor: '#FFF',
                    borderBottom: '1px solid rgba(0,0,0,0.15)',
                  }}
                >
                <img
                  src={item.labels.medium}
                  alt={item.name}
                  style={{
                    width: '85%',
                    margin: '0 auto',
                  }}
                />
                </section>
              }            
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
                  lineHeight: '16px',
                  height: '40px',
                  marginBottom: '10px',
                  color: '#363636',
                }}
                title={item.name}
              >
                {item.name}
              </h1>

              <p>{`Stock: ${item.stock}`}</p>
              <p>{`Price: ${item.formatPrice}`}</p>
              <button
                type="button"
                style={{
                  marginTop: '10px',
                }}
                className="buy-item"
                onClick={e => this.handleAddCart(item, e)}
              >
                Buy
              </button>
            </section>
          ))}
        </article>
      </>
    );
  }
}

Products.propTypes = {
  fetchProducts: func.isRequired,
  addToCart: func,
  products: object,
};

Products.defaultProps = {
  products: { },
  addToCart: () => {},
};

function mapStateToProps(state, ownProps) {
  const {
    products,
  } = state;

  return {
    ...ownProps,
    products,
  };
}

const mapDispatchToProps = {
  fetchProducts,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
