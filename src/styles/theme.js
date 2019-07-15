import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { Montserrat, MontserratSemiBold, MontserratThin } from './fonts';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Monteserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontFamily: 'Montserrat Thin',
    },
    subtitle1: {
      fontFamily: 'Monteserrat SemiBold',
    },
    body1: {
      fontFamily: 'Monteserrat',
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Montserrat,MontserratSemiBold,MontserratThin],
      },
    },
  },
  palette: {
    primary: {
      main: '#00274c',
    },
    secondary: {
      main: '#Ffcb05',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;