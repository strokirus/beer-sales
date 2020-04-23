import React, { Component } from 'react';
import {
  func,
  object,
  string,
} from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchProducts,
} from './actions';

import {
  addToCart,
} from '../Cart/actions';

import Product from '../../components/Product';
import Loading from '../../components/Loading';
import ErrorPage from '../../components/ErrorPage';
import { ContentProducts } from '../../cssGlobals/globals';

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
      term,
    } = this.props;

    if (term && term.length > 3) {
      fetchProductsProps({
        name: term,
      });
    } else {
      fetchProductsProps();
    }
  }

  handleAddCart = (e) => {
    const {
      addToCart: addToCartProps,
    } = this.props;

    addToCartProps(e);
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
        <Loading />
      );
    }

    if (status.isError) {
      return (
        <ErrorPage />
      );
    }

    if (items.length === 0) {
      return (
        <p>No results</p>
      );
    }

    return (
      <>
        <h2
          style={{
            width: '100%',
            height: '30px',
            padding: '5px 15px',
          }}
        >
          {term.length > 0
            && `Found ${items.length} for "${term}"`}
        </h2>
        <ContentProducts
          id="content-products"
        >
          {items.map((item) => (
            <Product
              key={item.id}
              item={item}
              handleAddCart={this.handleAddCart}
            />
          ))}
        </ContentProducts>
      </>
    );
  }
}

Products.propTypes = {
  fetchProducts: func.isRequired,
  addToCart: func,
  products: object,
  term: string,
};

Products.defaultProps = {
  products: { },
  term: '',
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
