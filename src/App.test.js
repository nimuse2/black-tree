import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('is website name included in site', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/FindaFlag/i);
  expect(linkElement).toBeInTheDocument();

});
