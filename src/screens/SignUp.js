import React from 'react';
import { Formik } from 'formik';
import { MyTextField } from 'components/MyTextField';
import { Box, Button, Divider, Link, Typography } from '@material-ui/core';
import { AuthContainer } from 'components';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

const signUpInitialValues = {
  username: '',
  email: '',
  password: '',
  passwordCheck: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Veuillez entrer un pseudonyme'),
  email: Yup.string()
    .email('Veuillez saisir une adresse email valide')
    .required('Veuillez entrer une adresse email'),
  password: Yup.string().required('Veuillez choisir un mot de passe'),
  passwordCheck: Yup.string()
    .required('Veuillez confimer votre mot de passe')
    .test(
      'check-pwd',
      'Le mot de passe entré ne correspond pas à celui entré',
      function checkPwd(value) {
        return this.parent.password === value;
      },
    ),
});

const SignUp = () => {
  const history = useHistory();

  return (
    <AuthContainer>
      <Typography variant='h4'>Inscription</Typography>
      <Formik
        initialValues={signUpInitialValues}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box display='flex' flexDirection='column'>
              <Box py={2}>
                <MyTextField
                  fullWidth
                  id='username'
                  name='username'
                  label='Pseudonyme'
                />
                <MyTextField fullWidth id='email' name='email' label='Email' />
                <MyTextField
                  fullWidth
                  type='password'
                  id='password'
                  name='password'
                  label='Mot de passe'
                />
                <MyTextField
                  fullWidth
                  type='password'
                  id='passwordCheck'
                  name='passwordCheck'
                  label='Confirmez votre mot de passe'
                />
              </Box>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Box mb={2}>
                  <Button
                    color='primary'
                    variant='contained'
                    disableElevation
                    disableTouchRipple
                    type='submit'>
                    S&apos;inscrire
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
      <Divider />
      <Box py={2} display='flex' justifyContent='center'>
        <Typography>
          <Link
            href='/'
            onClick={(e) => {
              e.preventDefault();
              history.push('/login');
            }}
            variant='body2'>
            Vous avez déjà un compte ? Connectez-vous
          </Link>
        </Typography>
      </Box>
    </AuthContainer>
  );
};

export default SignUp;
