import React, { useState } from 'react';
import {
  makeStyles,
  Typography,
  Button,
  Box,
  Container,
  Paper,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextField } from 'components/MyTextField';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import jwtDecode from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '100%',
  },
  loginContainer: {
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    padding: theme.spacing(4),
  },
}));

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
  const classes = useStyles();
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
    <Container maxWidth='sm' className={classes.mainContainer}>
      <Box
        height='100%'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Paper className={classes.loginContainer}>
          <Typography variant='h4'>Login</Typography>
          {error && (
            <Box my={2}>
              <Alert severity='error'>
                Votre combinaison email / mot de passe est incorrecte.
              </Alert>
            </Box>
          )}
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
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                  disableElevation
                  disableTouchRipple>
                  Se connecter
                </Button>
              </form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
