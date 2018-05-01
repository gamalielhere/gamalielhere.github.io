import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import { Link } from 'react-router-dom'
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import logo from "../../assets/ms-icon-310x310.png";

const classes = {
  root: {
    flexGrow: 1
  },
  icon: {
    width: "50px",
    height: "50px"
  },
  iconContainer: {
    flex: 1
  },
  buttonTemp: {
    color: 'white'
  }
};

class HeaderContainerComponent extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to='/' className={classes.iconContainer}>
              <img src={logo} className={classes.icon}/>
            </Link>
            <div >
              <Button component={Link} to="/" className={classes.buttonTemp}>
                Home
              </Button>
              <Button component={Link} to="/projects" className={classes.buttonTemp}>
                Projects
              </Button>
              <Button component={Link} to="/about" className={classes.buttonTemp}>
                About
              </Button>
              <Button component={Link} to="/connect" className={classes.buttonTemp}>
                Connect
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(classes)(HeaderContainerComponent);
