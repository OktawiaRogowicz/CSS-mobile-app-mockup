import React from "react";
import styled from "styled-components";

const RadioWrapper = styled.div`
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  line-height: 1rem;
`;

const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid var(--very-light-magenta);
  width: 14px;
  height: 14px;
  left: 0;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
  
  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: var(--very-light-magenta);
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  // &:checked + ${Mark} {
  //   &::after {
  //     width: 10px;
  //     height: 10px;
  //     opacity: 1;
  //     left: 12%;
  //     top: 12%;
  //   }
  // }
`;

const Label = styled.label`
  display: inline-flex;
  //cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  
  width: 100%;
  
  ${props =>
    props.disabled &&
    `
        cursor: not-allowed;
        opacity: 0.4;
    `}
  
  h1 {
    font-size: 1rem;
    font-weight: 700;
    margin-left: auto;
    margin-right: 10px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

const Radio = ({ amount, children }) => (
    <RadioWrapper>
        <Label>
            <Input type="radio" />
            <Mark />
            {children} <h1>{amount}</h1>
        </Label>
    </RadioWrapper>
);

export default Radio;
