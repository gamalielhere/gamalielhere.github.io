import CssBaseline from "material-ui/CssBaseline";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { PureComponent } from "react";
import theme from "../../config/theme";
import "../../css/App.css";
import HeaderContainerComponent from "../HeaderComponent";

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <HeaderContainerComponent />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
