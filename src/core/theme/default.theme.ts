import { createMuiTheme } from '@material-ui/core/styles';

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF',
      dark: '#23282E',
    },
    secondary: {
      main: '#505254',
    },
    info: {
      main: '#FFA800',
    },
    success: {
      main: '#00A356',
    },
    error: {
      main: '#E55353',
    },
    background: {
      default: '#000',
    },
    text: {
      primary: '#FFF',
      secondary: '#C4C4C4',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
    fontWeightLight: 'lighter',
    fontWeightRegular: 'normal',
    fontWeightMedium: 'bold',
    fontWeightBold: 'bolder',
    h1: {
      fontFamily: ['Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
        ',',
      ),
      fontSize: '5.125rem',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: ['Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
        ',',
      ),
      fontSize: '3.5rem',
      fontWeight: 'bolder',
    },
    h3: {
      fontFamily: ['Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
        ',',
      ),
      fontSize: '2.5rem',
      fontWeight: 'normal',
    },
    h4: {
      fontFamily: ['Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
        ',',
      ),
      fontSize: '2.125rem',
      fontWeight: 'normal',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: ['Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
        ',',
      ),
    },
    h6: {
      fontFamily: ['Oswald', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
        ',',
      ),
    },
    body1: {
      fontSize: '1.2rem',
      fontWeight: 'normal',
    },
    body2: {
      fontSize: '1.2rem',
      fontWeight: 'normal',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 'normal',
      textTransform: 'capitalize',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 840,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '#root': {
          minHeight: '100vh',
          background: `linear-gradient(353deg, #23282E, #000) #000`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          textAlign: 'center',
        },
      },
    },
  },
});
