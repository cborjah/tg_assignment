import React, { Component } from "react";
import PropTypes from "prop-types";

// Styled using styled-components library, CheckBox and RadioBtn are button elements
import { CheckBox, RadioBtn } from "./styles";
import { CheckMarkIcon } from "./";

// Font Awesome used for radio button
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faCircle);

class Button extends Component {
  state = { isActive: false };

  // Changes state to activate animations, then invokes onPress prop.
  handleOnClick = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      this.props.onPress();
    });
  };

  /*
  Renders one of two buttons depending on the 'type' prop.
  CheckBox and RadioBtn are styled 'button' elements.
  Returns 'checkMark' button by default.
  */
  render() {
    const { isActive } = this.state;
    const { type } = this.props;

    if (type === "checkMark") {
      return (
        <CheckBox
          onClick={this.handleOnClick}
          isActive={isActive}
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
  checkBoxSize: PropTypes.string,
  checkMarkColor: PropTypes.string,
  checkMarkSize: PropTypes.string,
  outerCircleSize: PropTypes.string,
  innerCircleSize: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string.isRequired
};

Button.defaultProps = {
  buttonColor: "blue",
  checkBoxSize: "30px",
  checkMarkColor: "white",
  checkMarkSize: "22px",
  outerCircleSize: "32px",
  innerCircleSize: "16px",
  onPress: () => null
};

export { Button };
