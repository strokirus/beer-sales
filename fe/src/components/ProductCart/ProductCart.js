import React from 'react';
import { object, func } from 'prop-types';

import {
  Header,
} from '../Product/styles';

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
  } = item;

  return (
    <section
      className="item-cart-product"
      key={id}
      style={{
        boxShadow: 'rgba(0,0,0,0.15) 0px 2px 4px 0px',
        border: '1px solid rgba(0,0,0,0.15)',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '10px 5px',
        paddingBottom: '10px',
      }}
      alt={name}
      title={name}
    >
      <Header>
        <h1>{name}</h1>
      </Header>

      <p>{`Qtd: ${qtd}`}</p>
      <section>
      <button
          className="remove-qtd"
          type="button"
          onClick={a => removeCart(item, a)}
        >{`-`}</button>        
        <button
          className="add-qtd"
          type="button"
          onClick={a => addCart(item, a)}
        >{`+`}</button>              
      </section>   
    </section> 
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
