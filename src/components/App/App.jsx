import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React, { PureComponent } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import theme from "../../config/theme.js";
import AboutComponent from "../AboutComponent";
import ConnectComponent from "../ConnectComponent";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import HomeComponent from "../HomeComponent";
import ProjectComponent from "../ProjectComponent";
import "../../css/App/index.css";

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
                <Route exact path="/home" component={HomeComponent} />
                <Route exact path="/projects" component={ProjectComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route exact path="/connect" component={ConnectComponent} />
                <Redirect from="/" to="home"/>
                <Redirect from="/portfolio" to="home"/>
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
