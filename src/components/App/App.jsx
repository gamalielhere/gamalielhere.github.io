import CssBaseline from "material-ui/CssBaseline";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from "../../config/theme.js";
import "../../css/App.css";
import HeaderContainerComponent from "../HeaderComponent";

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <MuiThemeProvider theme={theme}>
            <HeaderContainerComponent />
            <Switch>
              <Route exact path="/" component={() => <div> Home! </div>} />
              <Route exact path="/projects" component={() => <div> Projects! </div>} />
              <Route exact path="/about" component={() => <div> About! </div>} />
              <Route exact path="/connect" component={() => <div> Connect! </div>} />
            </Switch>
          </MuiThemeProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
