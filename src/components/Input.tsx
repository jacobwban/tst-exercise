import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  input {
    border-radius: 5px;
    border: 2px solid black;
    padding: 5px;
    :hover {
      border: 2px solid mediumpurple;
    }
  }
  label {
    font-weight: bold;
    margin-bottom: 3px;
  }
`;

interface IProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  type?: "text" | "password";
}

export const Input: React.FunctionComponent<IProps> = (props) => {
  const { name, value, onChange, type = "text" } = props;
  const changed = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };
  return (
    <InputWrapper>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} value={value} onChange={changed} />
    </InputWrapper>
  );
};
