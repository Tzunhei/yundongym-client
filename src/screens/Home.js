import React from 'react';
import {
  makeStyles,
  Typography,
  Button,
  Box,
  Container,
  Paper,
  TextField,
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextField } from 'components/MyTextField';

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

const Home = () => {
  const classes = useStyles();

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
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box py={2} display='flex' flexDirection='column'>
                  <MyTextField name='email' label='email' />
                  <MyTextField name='password' label='mot de passe' />
                </Box>
                <Button
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
