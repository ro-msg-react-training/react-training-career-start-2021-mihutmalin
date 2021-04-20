import { createMuiTheme } from '@material-ui/core/styles';
import '../fonts/Fonts.css';

export const standardTheme = createMuiTheme({
  palette: {
    primary:{
        light: '#CFEE9E',
        main: '#8DAB7F',
        dark: '#394032',
        contrastText: '#1E2019'
      },
  },
  typography: {
    fontFamily: '"OpenSans", bold',
    fontSize: 12,
  }
});