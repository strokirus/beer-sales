import React, { Component } from 'react';
import {
  func,
  object,
  string,
} from 'prop-types';
import { connect } from 'react-redux';

import {
  setText,
  setTextEnter,
} from './actions';

import InputSearch from '../../components/InputSearch';

/**
 * Search Container
*/
class Search extends Component {
  componentDidMount = () => {
    const {
      term,
      setText: setTextProps,
    } = this.props;

    if (term && term.length > 0) {
      setTextProps(term);
    }
  }

  onChangeText = (e) => {
    const {
      setText: setTextProps,
    } = this.props;

    setTextProps(e.target.value);
  }

  onKeyChange = (e) => {
    const {
      keyCode,
    } = e;

    const {
      setTextEnter: setTextEnterProps,
    } = this.props;

    if (keyCode === 13) {
      setTextEnterProps();
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
      <InputSearch
        text={text}
        onChangeText={this.onChangeText}
        onKeyChange={this.onKeyChange}
      />
    );
  }
}

Search.propTypes = {
  setText: func,
  setTextEnter: func,
  search: object,
  term: string,
};

Search.defaultProps = {
  search: { },
  setText: () => {},
  setTextEnter: () => {},
  term: '',
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
