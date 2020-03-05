import React from "react";
import styled from "styled-components";
import ProviderSelect from "../../../ProviderSelect";

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

const LoginForm = props => {
  const {
    className,
    onSubmit,
    error,
    selectPlaceholder,
    onSelectChange,
    providers,

    formButtonText,
    theme
  } = props;
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
            onChange: onSelectChange,
            options: providers,
            components: true,
            name: "provider"
          }}
        />
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
