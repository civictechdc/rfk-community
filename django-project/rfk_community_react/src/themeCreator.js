import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#550098' },
    secondary: { main: '#1D937E' }
  },
  typography: {
    fontFamily: ['Open Sans', 'arial', 'sans-serif']
  }
});

export default theme;
