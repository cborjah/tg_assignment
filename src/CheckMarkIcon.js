import React from "react";
import PropTypes from "prop-types";

import { Polyline } from './styles';

const CheckMarkIcon = ({ checkMarkColor, checkMarkSize }) => (
  <svg
    width={checkMarkSize}
    height={checkMarkSize}
    viewBox="0 0 79 79"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="CheckMark"
        transform="translate(-13.000000, -13.000000)"
        stroke={checkMarkColor}
        strokeWidth="12"
      >
        <Polyline id="Path-2" points="20 63.3333333 41.6666667 85 85 20" />
      </g>
    </g>
  </svg>
);

CheckMarkIcon.propTypes = {
  checkMarkColor: PropTypes.string,
  checkMarkSize: PropTypes.string
};

CheckMarkIcon.defaultProps = {
  checkMarkColor: "white",
  checkMarkSize: "22px"
};

export default CheckMarkIcon;
