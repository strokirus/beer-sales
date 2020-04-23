import React from 'react';
import { object, func } from 'prop-types';

import {
  Header,
} from '../Product/styles';

import {
  ItemCart,
  SectionBody,
  Commands,
} from './styles';

/**
 * Component to Product
 * @param item Object with product info
 * @param addCart Function to Add Product in Cart
*/
const ProductCart = ({ item, addCart, removeCart }) => {
  const {
    id,
    name,
    qtd,
    formatPrice,
    total,
  } = item;

  return (
    <ItemCart
      className="item-cart-product"
      key={id}
      alt={name}
      title={name}
    >
      <Header>
        <h1>{name}</h1>
      </Header>

      <SectionBody>
        <p>{`Qtd: ${qtd}`}</p>
        <p>{`${formatPrice}/un`}</p>
      </SectionBody>
      <Commands>
        <button
          className="remove-qtd"
          type="button"
          onClick={(a) => removeCart(item, a)}
        >
          -
        </button>
        <button
          className="add-qtd"
          type="button"
          onClick={(a) => addCart(item, a)}
        >
          +
        </button>
        <p>{`${total}`}</p>
      </Commands>
    </ItemCart>
  );
};

ProductCart.propTypes = {
  item: object,
  addCart: func,
  removeCart: func,
};

ProductCart.defaultProps = {
  item: { },
  addCart: () => {},
  removeCart: () => {},
};

export default ProductCart;
