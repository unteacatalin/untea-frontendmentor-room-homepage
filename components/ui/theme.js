import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(0, 0%, 63%)',
    },
    secondary: {
      main: 'hsl(0, 0%, 0%)',
    },
    common: {
      dark_gray: 'hsl(0, 0%, 63%)',
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)',
      very_dark_gray: 'hsl(0, 0%, 27%)',
    },
  },
  typography: {
    fontFamily: '"Kumbh Sans", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '0.9rem',
      fontWeight: 700,
    },
    body: {
      fontSize: '1.125rem',
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
      xxxl: 2208,
    },
  },
});

export default theme;
