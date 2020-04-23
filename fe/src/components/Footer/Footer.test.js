import React from 'react';
import renderer from 'react-test-renderer';
import {
  mount,
  configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('(Component) Footer', () => {
  it('should render an Footer', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call toggleTheme event', () => {
    const onToggleThemeEventFn = jest.fn();

    const wrapper = mount(
      <Footer
        toggleTheme={onToggleThemeEventFn}
      />,
    );
    expect(onToggleThemeEventFn).toHaveBeenCalledTimes(0);

    wrapper
      .find('button[type="button"]')
      .first()
      .simulate('click');

    expect(onToggleThemeEventFn).toHaveBeenCalledTimes(1);
  });
});
