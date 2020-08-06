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

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '100%',
  },
  loginContainer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    padding: theme.spacing(4),
  },
}));

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
          <Box py={2} display='flex' flexDirection='column'>
            <TextField color='primary' label='email' />
            <TextField label='mot de passe' />
          </Box>
          <Button variant='contained' disableElevation disableTouchRipple>
            Se connecter
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
