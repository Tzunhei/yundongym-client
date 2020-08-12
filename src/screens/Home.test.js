import React from 'react';
import { gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';
import AdminDashboard from './AdminDashboard';

const LOGIN = gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
      message
      token
    }
  }
`;

const loginMock = {
  request: {
    query: LOGIN,
    variables: { input: { email: 'test@email.com', password: 'test' } },
  },
  result: {
    data: {
      login: {
        message: 'User successfully login',
        token:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjllM2RjOTg4LTIwZDQtNDQ2Ni1hNjRiLTc1NGY3Nzk0ZTQ2OSIsInJvbGUiOiJBRE1JTiIsImVtYWlsIjoiamlyb2QyMzYwOEBhZ2Vva2ZjLmNvbSIsImlhdCI6MTU5NzE1ODY0NSwiZXhwIjoxNTk3NzYzNDQ1fQ.vkFdaIUkV1iKHX5pgAfdrzVXiuB7Dj2iYjrybahSgjY',
      },
    },
  },
};

const errorLoginMock = {
  request: {
    query: LOGIN,
    variables: { input: { email: 'test@email.com', password: 'wrongPwd' } },
  },
  result: {
    errors: [
      {
        message: 'Authentification failed',
        locations: [
          {
            line: 2,
            column: 3,
          },
        ],
        path: ['login'],
      },
    ],
    data: null,
  },
};

afterEach(() => cleanup());

describe('Login form', () => {
  it('open admin dashboard', async () => {
    const { findByText, getByRole, getByLabelText } = render(
      <MockedProvider mocks={[loginMock]} addTypename={false}>
        <MemoryRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin/dashboard' component={AdminDashboard} />
          </Switch>
        </MemoryRouter>
      </MockedProvider>,
    );
    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('mot de passe');

    const submitButton = getByRole('button', '/Se connecter/');

    userEvent.type(emailInput, 'test@email.com');
    userEvent.type(passwordInput, 'test');

    userEvent.click(submitButton);

    const welcomeText = await findByText('welcome');

    expect(welcomeText).toBeInTheDocument();
  });

  it('throw errors if authentication error', async () => {
    const { findByText, getByRole, getByLabelText } = render(
      <MockedProvider mocks={[errorLoginMock]} addTypename={false}>
        <MemoryRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin/dashboard' component={AdminDashboard} />
          </Switch>
        </MemoryRouter>
      </MockedProvider>,
    );
    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('mot de passe');

    const submitButton = getByRole('button', '/Se connecter/');

    userEvent.type(emailInput, 'test@email.com');
    userEvent.type(passwordInput, 'wrongPwd');

    userEvent.click(submitButton);

    const errorText = await findByText(
      'Votre combinaison email / mot de passe est incorrecte.',
    );

    expect(errorText).toBeInTheDocument();
  });
});
