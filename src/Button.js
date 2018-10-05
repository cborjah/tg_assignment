import React, { Component } from 'react';
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { Container, CheckBox, RadioBtn, ButtonText } from "./styles";
import CheckMarkIcon from './CheckMarkIcon';

library.add(faCircle);

class Button extends Component {
  state = { isActive: null };

  handleOnClick = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      this.props.onSelect();
    });
  };

  render() {
    const { isActive } = this.state;
    const { type, text } = this.props;

    if (type === 'checkMark') {
      return (
        <Container onClick={this.handleOnClick}>
          <CheckBox isActive={isActive} {...this.props}>
            {isActive ? <CheckMarkIcon /> : null}
          </CheckBox>
          <ButtonText>{this.props.text}</ButtonText>
        </Container>
      );
    }

    if (type === 'radio') {
      return (
        <Container onClick={this.handleOnClick}>
          <RadioBtn isActive={isActive} {...this.props}>
            {isActive ? <FontAwesomeIcon icon="circle" className="radioCircle" /> : null}
          </RadioBtn>
          <ButtonText>{text}</ButtonText>
        </Container>
      );
    }
  }
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onSelect: PropTypes.func,
  type: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'blue',
  text: 'Text goes here',
  onSelect: () => null,
};

export default Button;
