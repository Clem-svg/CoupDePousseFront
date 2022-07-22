// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#085b48',
        light: '#4db6ac',
        contrastText: '#fbfbfb',

      },
      secondary: {
        main: '#f0394d',
        light: '#ef9a9a',
        contrastText: '#fbfbfb',
      },
      info: {
        main: "#02c6f3",
      },
  
      success: {
        main: "#17ad37",
      },
  
      warning: {
        main: "#f53939",
      },
  
      error: {
        main: "#ea0606",
      },
    },
    shape: {
      borderRadius: 4,
    },
    typography: {
      htmlFontSize: 14,
      fontFamily: "Outfit", 
      fontWeightRegular: 400,
      fontWeightBold: 700,
      h1: {
        fontSize: '4rem',
        fontFamily: '"Outfit", "Arial", sans-serif',
      },
      h2: {
        fontSize: '3rem',
      },
      h3: {
        fontFamily: '"Outfit", "Helvetica", "Arial", sans-serif',
        fontSize: '2rem',
      },
    },
    
  });

  theme.typography.h1 = {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '1.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5em',
    },
  };

  theme.typography.h2 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };

  theme.typography.h3 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.2em',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };

  theme.typography.subtitle1 = {
    fontSize: '0.75rem',
    '@media (min-width:600px)': {
      fontSize: '1em',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.25rem',
    },
  };