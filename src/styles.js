import styled from "styled-components";

export const Container = styled.li`
  height: 160px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  border-top: 1px solid;
  ${"" /* border-bottom: 1px solid; */};
`;

export const CheckBox = styled.div`
  margin: 0 20px;
  height: 100px;
  width: 100px;
  padding: 0;
  outline: 0;
  border-width: ${props => props.borderWidth};
  border-style: ${props => props.borderStyle};
  border-color: ${props => props.borderColor};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isActive ? props.color : "white")};

  &:focus, &:active {
    outline: 0;
  }

  .checkMark {
    color: ${props => props.checkMarkColor};
    font-size: 80px;
  }
`;

export const RadioBtn = styled.button`
  height: 100px;
  width: 100px;
  margin: 0 20px;
  padding: 0;
  outline: 0;
  border-width: 10px;
  border-style: solid;
  border-color: blue;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: "white";
  }}

  :focus, :active {
    outline: 0;
  }

  .radioCircle {
    color: blue;
    font-size: 60px;
  }
`;

export const ButtonText = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  font-size: 20px;
`
