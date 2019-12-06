import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#426AAA' },
    secondary: { main: '#616161' }
  },
  typography: {
    fontFamily: ['Open Sans', 'arial', 'sans-serif']
  }
});

export default theme;
