import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import ViewHeadline from "@material-ui/icons/ViewHeadline";
import { Link } from "react-router-dom";
import logo from "../../assets/ms-icon-310x310.png";

const classes = {
  root: {
    flexGrow: 1,
    position: "relative",
    zIndex: 2,
  },
  icon: {
    width: "50px",
    height: "50px"
  },
  iconContainer: {
    flex: 1
  },
  buttonTemp: {
    color: "white"
  },
  appBar: {
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  toolbarClass: {
    "@media screen and (max-width: 600px)": {
      display: "flex",
      justifyContent: "space-between"
    }
  },
  navContainer: {
    "@media screen and (max-width: 600px)": {
      display: "none"
    }
  },
  navIcon: {
    "@media screen and (min-width: 600px)": {
      display: "none"
    }
  },
  drawerLinks: {
    height: 65,
    width: 300
  }
};

class HeaderComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.openDrawer = this.openDrawer.bind(this)
  }

  openDrawer() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state
    const links = [
      {
        link: "/",
        text: "Home"
      },
      {
        link: "/projects",
        text: "Projects"
      },
      {
        link: "/about",
        text: "About"
      },
      {
        link: "/connect",
        text: "Connect"
      }
    ];

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbarClass}>
            <Link to="/" className={classes.iconContainer}>
              <img src={logo} className={classes.icon} alt="Site logo" />
            </Link>
            <div className={classes.navContainer}>
              {
                links.map((item, idx) => {
                  return (
                    <Button component={Link} to={item.link} className={classes.buttonTemp} key={item.text+idx+"header"}>
                      {item.text}
                    </Button>
                  )
                })
              }
            </div>
          <div className={classes.navIcon}>
            <ViewHeadline onClick={this.openDrawer}></ViewHeadline>
          </div>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={isOpen} onClose={this.openDrawer}>
          {
            links.map((item, idx) => {
              return (
                <Button component={Link} to={item.link} className={classes.drawerLinks} key={item.text+idx+"Drawer"}>
                  {item.text}
                </Button>
              )
            })
          }
        </Drawer>
      </div>
    );
  }
}

export default withStyles(classes)(HeaderComponent);
