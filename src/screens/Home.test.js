import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Login form', () => {
  it('throw errors if submit without filling the form', async () => {
    const { getByRole, getByText } = render(<Home />);

    const submitButton = getByRole('button', '/Se connecter/');

    userEvent.click(submitButton);

    await waitForElement(() => getByText('Veuillez renseigner votre email.'));
    expect(
      getByText('Veuillez renseigner votre mot de passe.'),
    ).toBeInTheDocument();
  });
});
