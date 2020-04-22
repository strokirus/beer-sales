import React from 'react';
import renderer from 'react-test-renderer';
import ErrorPage from './ErrorPage';

describe('(Component) ErrorPage', () => {
  it('should render an ErrorPage', () => {
    const tree = renderer.create(<ErrorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
