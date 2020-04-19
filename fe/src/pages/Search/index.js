import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchProducts,
  setText,
  setTextEnter,
} from './actions';

/**
 * Search Container
*/
class Search extends Component {
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

  onChangeText = (e) => {
    const {
      setText,
    } = this.props;

    setText(e.target.value);
  }

  onKeyChange = (e) => {
    const {
      keyCode,
    } = e;

    const {
      setTextEnter,
    } = this.props;

    if (keyCode === 13) {
      setTextEnter();
    }
  }  

  render() {
    const {
      search
    } = this.props;

    const {
      items,
      status,
      text,
    } = search;

    if (status.isLoading && items.length === 0) {
      return (
        <section>
          <h1>Loading...</h1>
        </section>
      );
    }

    if (status.isError) {
      return (
        <section>
          <h1>Something is rotten in the state of Denmark</h1>
          <p>Try contact the administrators of site</p>
        </section>
      );
    }

    return (
      <>
        <input
          type="text"
          id="search-box"
          value={text}
          onChange={e => this.onChangeText(e)}
          onKeyUp={e => this.onKeyChange(e)}
          style={{
            width: '80%',
            padding: '8px 5px',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
            fontSize: '16px',
            border: '1px solid rgba(0, 0, 0, 0.3)'
          }}
        />
        {text.length > 0 &&
          <h3>Search by {text}</h3>
        }
        <article
          id="content-products"
          style={{
            width: '75%',
            display: 'grid',
            gridTemplateColumns: '25% 25% 25% 25%',
            gridTemplateRows: 'auto auto auto auto',
            padding: '15px 10px',
            fontSize: '10px'
          }}
        >
          {items.map(e => (
            <section
              className="item-product"
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
              {e.labels && e.labels.medium &&
                <section
                  style={{
                    padding: '10px',
                    borderRadius: '10px 10px 0 0',
                    backgroundColor: '#FFF',
                    borderBottom: '1px solid rgba(0,0,0,0.15)',
                  }}
                >
                <img
                  src={e.labels.medium}
                  alt={e.name}
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
                title={e.name}
              >
                {e.name}
              </h1>

              <p>{`Stock: ${e.stock}`}</p>
              <p>{`Price: ${e.formatPrice}`}</p>
              <button
                type="button"
                style={{
                  marginTop: '10px',
                }}                
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

Search.propTypes = {
  fetchProducts: func.isRequired,
  setText: func,
  setTextEnter: func,
  search: object,
};

Search.defaultProps = {
  search: { },
  setText: () => {},
  setTextEnter: () => {},
};

function mapStateToProps(state, ownProps) {
  const {
    search,
  } = state;

  return {
    ...ownProps,
    search,
  };
}

const mapDispatchToProps = {
  fetchProducts,
  setText,
  setTextEnter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
