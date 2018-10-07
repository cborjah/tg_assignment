import styled, { keyframes } from "styled-components";

// --------------- Animation Keyframes ---------------

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
}
`;

const rise = keyframes`
  from {
    transform: scale(1);
    box-shadow: none;
  }

  to {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
`;

const shrink = keyframes`
  from {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  to {
    transform: scale(1);
    box-shadow: none;
  }
`;

const grow = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

// --------------- Check Box Button ---------------
export const CheckBox = styled.button`
  margin: 0 20px;
  height: ${props => props.checkBoxSize};
  width: ${props => props.checkBoxSize};
  padding: 0;
  outline: 0;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.buttonColor};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isActive ? props.buttonColor : "white")};
  transition: background-color 0.3s ease-in-out;
  animation: ${props => {
    if (props.isActive === true) {
      return `${rise} ease-in-out 0.2s forwards`;
    } else if (props.isActive === false) {
      return `${shrink} ease-in-out 0.2s forwards`;
    }
  }};

  &:focus, &:active {
    outline: 0;
  }
`;

// --------------- Radio Button ---------------
export const RadioBtn = styled.button`
  height: ${props => props.outerCircleSize};
  width: ${props => props.outerCircleSize};
  margin: 0 20px;
  padding: 0;
  outline: 0;
  border-width: 4px;
  border-style: solid;
  border-color: ${props => props.buttonColor};
  border-radius: ${props => {
    const size = parseInt(props.outerCircleSize.slice(0, -2));
    return (size / 2) + "px";
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: "white";
  animation: ${props => {
    if (props.isActive === true) {
      return `${rise} ease-in-out 0.2s forwards`;
    } else if (props.isActive === false) {
      return `${shrink} ease-in-out 0.2s forwards`;
    }
  }}

  :focus, :active {
    outline: 0;
  }

  .radioCircle {
    color: ${props => props.buttonColor};
    font-size: ${props => props.innerCircleSize};
    animation: ${grow} ease-out 0.2s forwards;
  }
`;

// --------------- Check Mark SVG ---------------
export const Polyline = styled.polyline`
  height: 80px;
  width: 90%;
  stroke-dasharray: 275;
  stroke-dashoffset: 275;
  animation: ${dash} 0.5s linear forwards;
  animation-delay: 0.2s;
`;
