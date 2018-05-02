import CssBaseline from "material-ui/CssBaseline";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from "../../config/theme.js";
import "../../css/App.css";
import HeaderContainerComponent from "../HeaderComponent";
import FooterContainerComponent from "../FooterComponent";

class App extends PureComponent {
  render() {
    const styles = {
      height: 'calc(100vh - 102px)'
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <MuiThemeProvider theme={theme}>
            <HeaderContainerComponent />
            <Switch>
              <Route exact path="/" component={() => <div style={styles}> Home! </div>} />
              <Route exact path="/projects" component={() => <div style={styles}> Projects! </div>} />
              <Route exact path="/about" component={() => <div style={styles}> About! </div>} />
              <Route exact path="/connect" component={() => <div style={styles}> Connect! </div>} />
            </Switch>
            <FooterContainerComponent />
          </MuiThemeProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
