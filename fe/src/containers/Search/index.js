import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';

import {
  setText,
  setTextEnter,
} from './actions';

/**
 * Search Container
*/
class Search extends Component {
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
      search,
    } = this.props;

    const {
      text,
    } = search;

    return (
      <input
        type="text"
        id="search-box"
        value={text}
        onChange={e => this.onChangeText(e)}
        onKeyUp={e => this.onKeyChange(e)}
        style={{
          width: '80%',
          outline: 'none',
          height: '15px',
          marginTop: '13px',
          padding: '8px 5px',
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
          fontSize: '16px',
          border: '1px solid rgba(0, 0, 0, 0.3)'
        }}
      />
    );
  }
}

Search.propTypes = {
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
  setText,
  setTextEnter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
