import CssBaseline from "material-ui/CssBaseline";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "../../config/theme.js";
import AboutComponent from "../AboutComponent";
import ConnectComponent from "../ConnectComponent";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import HomeComponent from "../HomeComponent";
import ProjectComponent from "../ProjectComponent";

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <MuiThemeProvider theme={theme}>
            <HeaderComponent />
            <Switch>
              <Route exact path="/" component={() => <HomeComponent />} />
              <Route
                exact
                path="/projects"
                component={() => <ProjectComponent />}
              />
              <Route
                exact
                path="/about"
                component={() => <AboutComponent />}
              />
              <Route
                exact
                path="/connect"
                component={() =>  <ConnectComponent />}
              />
            </Switch>
            <FooterComponent />
          </MuiThemeProvider>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
