import React from 'react';
import { object, func } from 'prop-types';

import {
  SectionProduct,
  BoxImage,
  Header,
  Button,
  PriceBox,
} from './styles';

/**
 * Component to Product
 * @param item Object with product info
 * @param handleAddCart Function to Add Product in Cart
*/
const Product = ({ item, handleAddCart }) => {
  const {
    id,
    name,
    labels,
    formatPrice,
  } = item;

  return (
    <SectionProduct
      className="item-product"
      key={id}
      alt={name}
      title={name}
    >
      {labels && labels.medium
        && (
        <BoxImage>
          <img
            src={labels.medium}
            alt={name}
          />
        </BoxImage>
        )}
      <Header>
        <h1>{name}</h1>
      </Header>
      <PriceBox>{`${formatPrice}`}</PriceBox>
      <Button
        type="button"
        className="buy-item"
        onClick={(e) => handleAddCart(item, e)}
      >
        Buy
      </Button>
    </SectionProduct>
  );
};

Product.propTypes = {
  item: object,
  handleAddCart: func,
};

Product.defaultProps = {
  item: { },
  handleAddCart: () => {},
};

export default Product;
