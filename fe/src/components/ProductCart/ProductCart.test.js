import React from 'react';
import renderer from 'react-test-renderer';
import {
  mount,
  configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductCart from './ProductCart';

configure({ adapter: new Adapter() });

const props = {
  item: {
    id: '9OyQXs',
    name: 'California Black Beer',
    qtd: 2,
    formatPrice: '€22,71',
    total: '€22,71',
  },
  addCart: jest.fn(),
  removeCart: jest.fn(),
};

describe('(Component) ProductCart', () => {
  it('should render an ProductCart', () => {
    const tree = renderer.create(<ProductCart {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call addCart event', () => {
    const onAddCartEventFn = jest.fn();

    const wrapper = mount(
      <ProductCart
        {...props}
        addCart={onAddCartEventFn}
      />,
    );
    expect(onAddCartEventFn).toHaveBeenCalledTimes(0);

    wrapper
      .find('.add-qtd')
      .first()
      .simulate('click');

    expect(onAddCartEventFn).toHaveBeenCalledTimes(1);
  });

  it('should call removeCart event', () => {
    const onRemoveCartEventFn = jest.fn();

    const wrapper = mount(
      <ProductCart
        {...props}
        removeCart={onRemoveCartEventFn}
      />,
    );
    expect(onRemoveCartEventFn).toHaveBeenCalledTimes(0);

    wrapper
      .find('.remove-qtd')
      .first()
      .simulate('click');

    expect(onRemoveCartEventFn).toHaveBeenCalledTimes(1);
  });
});
