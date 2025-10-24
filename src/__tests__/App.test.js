import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
test('renders "Hello, world!" text', () => { // <--- This is the missing test block
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Hello, world!/i });
  expect(headingElement).toBeInTheDocument();
});
