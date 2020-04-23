import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import store from '../../store';

describe('(Component) Header', () => {
  it('should render an Header', () => {
    const tree = renderer
      .create(
        <Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
