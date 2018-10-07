import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import CheckMarkIcon from "../CheckMarkIcon";

describe("CheckMarkIcon component", () => {
  it("renders successfully", () => {
    const div = document.createElement("div");

    ReactDOM.render(<CheckMarkIcon type="checkMark" />, div);
  });

  it("passes CheckMarkSize props to svg tag", () => {
    const wrapper = shallow(<CheckMarkIcon checkMarkSize={"20px"} />);

    const svg = wrapper.find("svg");

    expect(svg.props().width).toEqual("20px");
    expect(svg.props().height).toEqual("20px");
  });

  it("passes CheckMarkColor props to svg tag", () => {
    const wrapper = shallow(<CheckMarkIcon checkMarkColor={"red"} />);

    const g = wrapper.find("g").at(1);

    expect(g.props().stroke).toEqual("red");
  });
});
