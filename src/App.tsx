import React, { useEffect, useState } from "react";
import { Container, Input, Button } from "./components";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  text-align: center;
`;

const UserMessage = styled.div<{ error: boolean }>`
  background-color: ${(props) => (props.error ? "tomato" : "mediumseagreen")};
  padding: 10px;
  color: white;
  margin-bottom: 10px;
`;

const defaultFormState = {
  username: "",
  password: "",
  confirm: "",
};

function App() {
  const [formState, setFormState] =
    useState<typeof defaultFormState>(defaultFormState);
  const [passwordMatch, setPasswordMatch] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    if (formState.password.length === 0 || formState.confirm.length === 0)
      return;
    if (formState.password === formState.confirm) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [formState]);

  const inputChanged = (name: string, value: string) => {
    setFormState((fs) => ({ ...fs, [name]: value }));
  };

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formState);
        }}
      >
        <Input
          name="username"
          value={formState.username}
          onChange={inputChanged}
        />
        <Input
          name="password"
          type="password"
          value={formState.password}
          onChange={inputChanged}
        />
        <Input
          name="confirm"
          type="password"
          value={formState.confirm}
          onChange={inputChanged}
        />
        {passwordMatch !== undefined && (
          <UserMessage error={!passwordMatch}>
            {passwordMatch ? "Passwords Match" : "Password Do Not Match"}
          </UserMessage>
        )}
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
}

export default App;
