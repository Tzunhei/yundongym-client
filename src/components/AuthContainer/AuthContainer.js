import React from 'react';
import { makeStyles, Box, Container, Paper } from '@material-ui/core';

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

const AuthContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth='sm' className={classes.mainContainer}>
      <Box
        height='100%'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Paper className={classes.loginContainer}>{children}</Paper>
      </Box>
    </Container>
  );
};

export default AuthContainer;
