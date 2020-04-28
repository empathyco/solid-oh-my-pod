import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProviderSelect from "../../../ProviderSelect";
import CustomProviderInput from "../customProviderInput";

const LoginFormWrapper = styled.div`
  button {
    margin: 20px auto;
    border: none;
    box-shadow: none;
    outline: none;
    background: none;
    font-family: "Raleway", sans-serif;
    font-size: 34px;
    color: #083575;
    font-weight: bold;
  }
`;

const SolidButton = styled.button`
  border: none;
  box-shadow: none;
  outline: none;
  background: none;
  font-family: "Raleway", sans-serif;
  font-size: 34px;
  color: #083575;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 0;
`;

const LoginForm = (props) => {
  const {
    className,
    onSubmit,
    error,
    selectPlaceholder,
    onSelectChange,
    providers,
    parentCallback,
    formButtonText,
    theme,
  } = props;

  const [customValue, setCustomValue] = useState("");
  const [customProviderSelected, setCustomProvider] = useState(false);
  const onProviderSelect = ($event: Event) => {
    setCustomProvider(!!$event.custom);
    props.onSelectChange($event);
  };

  // Change custom value on input text change
  useEffect(() => {
    parentCallback(customValue);
  }, [customValue]);
  return (
    <LoginFormWrapper
      className={`solid-provider-login-component ${className} ${error &&
        "error"}`}
    >
      <form onSubmit={onSubmit}>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <ProviderSelect
          {...{
            placeholder: selectPlaceholder,
            onChange: onProviderSelect,
            options: providers.concat({
              custom: true,
              label: "I want to introduce another provider",
              image: "",
              value: "",
              description:
                "This is a prototype implementation of a Solid server",
            }),
            components: true,
            name: "provider",
          }}
        />

        {customProviderSelected ? (
          <CustomProviderInput
            customValueSetter={setCustomValue}
          ></CustomProviderInput>
        ) : null}
        <SolidButton
          type="submit"
          data-testid="provider-form-button"
          className={theme.buttonLogin}
        >
          {formButtonText}
        </SolidButton>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
