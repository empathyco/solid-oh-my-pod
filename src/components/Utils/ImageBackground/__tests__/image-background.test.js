import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ImageBackground from '../image-background.component';

afterAll(cleanup);

const { container } = render(<ImageBackground />);

describe('ImageBackground', () => {
  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
