import React from 'react';
import { Formik } from 'formik';
import { MyTextField } from 'components/MyTextField';
import { Button, Typography } from '@material-ui/core';

const SignUp = () => {
  return (
    <div>
      <Typography>Inscription</Typography>
      <Formik initialValues={{ password: '' }}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <MyTextField
              id='password'
              name='password'
              label='Choisissez votre mot de passe'
            />
            <Button
              color='primary'
              variant='outlined'
              disableElevation
              disableTouchRipple
              type='submit'>
              S&apos;inscrire
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
