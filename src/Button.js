import React, { Component } from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { CheckBox, RadioBtn } from "./styles";
import CheckMarkIcon from "./CheckMarkIcon";

library.add(faCircle);

class Button extends Component {
  state = { isActive: false };

  handleOnClick = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      this.props.onPress();
    });
  };

  render() {
    const { isActive } = this.state;
    const { type, buttonStyles } = this.props;

    if (type === "checkMark") {
      return (
        <CheckBox
          onClick={this.handleOnClick}
          isActive={isActive}
          style={buttonStyles}
          {...this.props}
        >
          {isActive ? <CheckMarkIcon {...this.props} /> : null}
        </CheckBox>
      );
    }

    if (type === "radio") {
      return (
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
      );
    }
  }
}

Button.propTypes = {
  buttonColor: PropTypes.string,
  checkMarkColor: PropTypes.string,
  checkMarkSize: PropTypes.string,
  innerCircleSize: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string.isRequired,
  buttonStyles: PropTypes.object
};

Button.defaultProps = {
  buttonColor: "blue",
  checkMarkColor: "white",
  checkMarkSize: "22px",
  innerCircleSize: "16px",
  onPress: () => null,
  buttonStyles: {}
};

export default Button;
