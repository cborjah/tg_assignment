import styled from "styled-components";

export const Container = styled.li`
  padding: 20px 10px;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  border-top: 1px solid;
  ${"" /* border-bottom: 1px solid; */};
`;

export const CheckBox = styled.div`
  margin: 0 20px;
  height: 30px;
  width: 30px;
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

  &:focus, &:active {
    outline: 0;
  }
`;

export const RadioBtn = styled.button`
  height: 34px;
  width: 34px;
  margin: 0 20px;
  padding: 0;
  outline: 0;
  border-width: 4px;
  border-style: solid;
  border-color: ${props => props.buttonColor};
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: "white";
  }}

  :focus, :active {
    outline: 0;
  }

  .radioCircle {
    color: ${props => props.buttonColor};
    font-size: 16px;
  }
`;

export const ButtonText = styled.span`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  font-size: 15px;
  cursor: default;
`
