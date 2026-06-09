import { createTheme } from '@mui/material/styles';
import { green, orange, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#141f4f',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: orange[500]
    },
    info: {
      main: green[500]
    }
  },
});

export default theme;
