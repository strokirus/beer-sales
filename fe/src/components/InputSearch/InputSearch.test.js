import React from 'react';
import renderer from 'react-test-renderer';
import InputSearch from './InputSearch';

const props = {
  text: 'Beer',
};

describe('(Component) InputSearch', () => {
  it('should render an InputSearch', () => {
    const tree = renderer.create(<InputSearch {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
