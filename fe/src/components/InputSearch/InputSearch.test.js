import React from 'react';
import renderer from 'react-test-renderer';
import {
  mount,
  configure,
} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import InputSearch from './InputSearch';

configure({ adapter: new Adapter() });

const props = {
  text: 'Beer',
  onChangeText: jest.fn(),
  onKeyChange: jest.fn(),
};

describe('(Component) InputSearch', () => {
  it('should render an InputSearch', () => {
    const tree = renderer.create(<InputSearch {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onKeyChange event', () => {
    const onKeyEventFn = jest.fn();
    const event = {
      key: 'Enter',
    };

    const wrapper = mount(
      <InputSearch
        {...props}
        onKeyChange={onKeyEventFn}
      />,
    );

    wrapper
      .find('input')
      .simulate('keyup', event);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onChangeText event', () => {
    const onChangeEventFn = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: 'bourbon' },
    };

    const wrapper = mount(
      <InputSearch
        {...props}
        onChangeText={onChangeEventFn}
      />,
    );

    wrapper
      .find('input')
      .simulate('change', event);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
