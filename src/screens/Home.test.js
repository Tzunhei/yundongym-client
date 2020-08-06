import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

test('renders a form', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Login')).toBeInTheDocument();

  expect(getByText('Se connecter')).toBeInTheDocument();
  expect(getByText('email')).toBeInTheDocument();
  expect(getByText('mot de passe')).toBeInTheDocument();
});
