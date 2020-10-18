import React, { useState } from 'react';
import { Typography, Button, Box, Divider, Link } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContainer, MyTextField } from 'components';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import jwtDecode from 'jwt-decode';

const loginInitialValues = {
  email: '',
  password: '',
};

const loginValidationSchema = Yup.object({
  email: Yup.string().required('Veuillez renseigner votre email.'),
  password: Yup.string().required('Veuillez renseigner votre mot de passe.'),
});

const LOGIN = gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
      message
      token
    }
  }
`;

const Home = () => {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [login] = useMutation(LOGIN, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token);
      const { role } = jwtDecode(data.login.token);
      if (role === 'ADMIN') {
        history.push('/admin/dashboard');
      }
    },
    onError: () => {
      setError(true);
      setTimeout(() => setError(false), 5000);
    },
  });

  const handleLogin = ({ email, password }) => {
    login({ variables: { input: { email, password } } });
  };

  return (
    <AuthContainer>
      <Typography variant='h4'>Login</Typography>
      {error && (
        <Box my={2}>
          <Alert severity='error'>
            Votre combinaison email / mot de passe est incorrecte.
          </Alert>
        </Box>
      )}
      <Box py={2}>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box py={2} display='flex' flexDirection='column'>
                <MyTextField id='email' name='email' label='email' />
                <MyTextField
                  id='password'
                  type='password'
                  name='password'
                  label='mot de passe'
                />
              </Box>
              <Box textAlign='center'>
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                  disableElevation
                  disableTouchRipple>
                  Se connecter
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <Divider />
      <Box py={2} textAlign='center'>
        <Typography>
          <Link
            href='/'
            onClick={(e) => {
              e.preventDefault();
              history.push('/signup');
            }}
            variant='body2'>
            Pas de compte ? Inscrivez-vous
          </Link>
        </Typography>
      </Box>
    </AuthContainer>
  );
};

export default Home;
