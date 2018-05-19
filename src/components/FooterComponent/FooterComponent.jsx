import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";

const classes = {
  footerContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: '#fff',
    padding: '10px 0',
    position: 'relative',
    textAlign: "center",
    zIndex: 2
  }
};
class FooterComponent extends PureComponent {
  render() {
    const { classes } = this.props;
    return <div className={classes.footerContainer}>© 2018 Gamaliel Padillo </div>;
  }
}

export default withStyles(classes)(FooterComponent);
