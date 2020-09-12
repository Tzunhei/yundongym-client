import React from 'react';
import { Formik } from 'formik';
import { MyTextField } from 'components/MyTextField';
import { Box, Button, Link, Typography } from '@material-ui/core';
import { AuthContainer } from 'components';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();

  return (
    <AuthContainer>
      <Typography variant='h4'>Inscription</Typography>
      <Formik initialValues={{ password: '' }}>
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
                  id='password'
                  name='password'
                  label='Mot de passe'
                />
                <MyTextField
                  fullWidth
                  id='passwordCheck'
                  name='passwordCheck'
                  label='Confirmez votre mot de passe'
                />
              </Box>
              <Box
                py={2}
                display='flex'
                flexDirection='column'
                alignItems='center'>
                <Box mb={2}>
                  <Button
                    color='primary'
                    variant='outlined'
                    disableElevation
                    disableTouchRipple
                    type='submit'>
                    S&apos;inscrire
                  </Button>
                </Box>
                <Typography>
                  <Link
                    href='/'
                    onClick={(e) => {
                      e.preventDefault();
                      history.push('/');
                    }}
                    variant='body2'>
                    Vous avez déjà un compte ? Connectez-vous
                  </Link>
                </Typography>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default SignUp;
