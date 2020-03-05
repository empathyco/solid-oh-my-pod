import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import auth from 'solid-auth-client';
import ProviderLogin from '../provider-login.container';
import 'jest-dom/extend-expect';

afterAll(cleanup);

describe('Provider Login Container', () => {
  const { container, getByTestId } = render(<ProviderLogin />);

  it('shoud renders without crashing', () => {
    expect(container).toBeTruthy();
  });


});
