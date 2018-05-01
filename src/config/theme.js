import createMuiTheme from 'material-ui/styles/createMuiTheme';
import blueGrey from 'material-ui/colors/blueGrey';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: grey,
    error: red
  }
});

export default theme;
