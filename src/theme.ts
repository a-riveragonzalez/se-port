'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#63BBC3',
        },
        secondary: {
          main: '#FBC02D',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#63BBC3',
        },
        secondary: {
          main: '#FBC02D',
        },
        background: {
          default: '#1e1419',
        },
      },
    },
  },
});

export default theme;
