import React from 'react';
import { Typography, Button, Box, Container } from '@material-ui/core';

const Home = () => {
  return (
    <Container>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
        <Typography>Welcome to yundongym app!</Typography>
        <Button>Se connecter</Button>
      </Box>
    </Container>
  );
};

export default Home;
