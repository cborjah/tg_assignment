import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('Button component', () => {
  it('renders successfully', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Button type="checkMark" />, div);
  });

  it('passes the isActive state and buttonColor prop to CheckBox', () => {
    const wrapper = shallow(<Button type="checkMark" buttonColor="red" />);

    expect(wrapper.props().isActive).toEqual(false);
    expect(wrapper.props().buttonColor).toEqual("red");
  });

  it('passes the isActive state and buttonColor prop to RadioBtn', () => {
    const wrapper = shallow(<Button type="radio" buttonColor="red" />);

    expect(wrapper.props().isActive).toEqual(false);
    expect(wrapper.props().buttonColor).toEqual("red");
  });

  describe('when clicked', () => {
    it('invokes onPress prop', () => {
      const onPress = jest.fn();
      const wrapper = shallow(<Button onPress={onPress} type="checkMark" />);
      const instance = wrapper.instance();

      instance.handleOnClick();
      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('sets isActive to the opposite of its current value', () => {
      const wrapper = shallow(<Button type="checkMark" />);
      const instance = wrapper.instance();

      instance.handleOnClick();
      expect(wrapper.state('isActive')).toEqual(true);

      instance.handleOnClick();
      expect(wrapper.state('isActive')).toEqual(false);
    });
  });

  describe('when button is active', () => {
    it('renders CheckMarkIcon if button type is checkMark', () => {
      const wrapper = shallow(<Button type="checkMark" />);

      wrapper.setState({ isActive: true });
      expect(wrapper.find('CheckMarkIcon').length).toEqual(1);
    });

    it('renders Font Awesome circle icon if button type is radio', () => {
      const wrapper = shallow(<Button type="radio" />);

      wrapper.setState({ isActive: true });
      expect(wrapper.find('FontAwesomeIcon').length).toEqual(1);
    });
  });

  // What is innerCircleSize used for?
  // Does the inner circle resize itself?
});
