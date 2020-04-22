import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('(Component) Loading', () => {
  it('should render an Loading', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
