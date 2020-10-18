import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#fff' },
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        '& > span': {
          color: '#3f51b5',
        },
      },
    },
  },
});

export default theme;
