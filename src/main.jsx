import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React, { PureComponent } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import theme from "./config/theme.js";
import HomeLayout from "./layouts/HomeLayout";
import ProjectLayout from "./layouts/ProjectLayout";
import AboutLayout from "./layouts/AboutLayout";
import ConnectLayout from "./layouts/ConnectLayout";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import "./css/main.css";

class App extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <HeaderComponent />
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="pageSlider"
              mountOnEnter={true}
              unmountOnExit={true}>
              <Switch location={location}>
                <Route exact path="/" component={HomeLayout} />
                <Route exact path="/projects" component={ProjectLayout} />
                <Route exact path="/about" component={AboutLayout} />
                <Route exact path="/connect" component={ConnectLayout} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <FooterComponent />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
