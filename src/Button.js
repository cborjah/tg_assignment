import React, { Component } from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { Container, CheckBox, RadioBtn, ButtonText } from "./styles";
import CheckMarkIcon from "./CheckMarkIcon";

library.add(faCircle);

class Button extends Component {
  state = { isActive: false };

  handleOnClick = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      this.props.onSelect();
    });
  };

  render() {
    const { isActive } = this.state;
    const {
      type,
      text,
      containerStyles,
      buttonStyles,
      textStyles
    } = this.props;

    if (type === "checkMark") {
      return (
        <Container>
          <CheckBox
            onClick={this.handleOnClick}
            isActive={isActive}
            style={buttonStyles}
            {...this.props}
          >
            {isActive ? <CheckMarkIcon {...this.props} /> : null}
          </CheckBox>
          <ButtonText style={textStyles}>{this.props.text}</ButtonText>
        </Container>
      );
    }

    if (type === "radio") {
      return (
        <Container style={containerStyles}>
          <RadioBtn
            onClick={this.handleOnClick}
            isActive={isActive}
            style={buttonStyles}
            {...this.props}
          >
            {isActive ? (
              <FontAwesomeIcon icon="circle" className="radioCircle" />
            ) : null}
          </RadioBtn>
          <ButtonText style={textStyles}>{text}</ButtonText>
        </Container>
      );
    }
  }
}

Button.propTypes = {
  buttonColor: PropTypes.string,
  checkMarkColor: PropTypes.string,
  innerCircleSize: PropTypes.string,
  text: PropTypes.string,
  onSelect: PropTypes.func,
  type: PropTypes.string.isRequired,
  containerStyles: PropTypes.object,
  buttonStyles: PropTypes.obejct,
  textStyles: PropTypes.object
};

Button.defaultProps = {
  buttonColor: "blue",
  checkMarkColor: "white",
  checkMarkSize: "22px",
  innerCircleSize: "16px",
  text: "Text goes here",
  onSelect: () => null,
  containerStyles: {},
  buttonStyles: {},
  textStyles: {}
};

export default Button;
