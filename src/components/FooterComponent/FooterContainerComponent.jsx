import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import grey from 'material-ui/colors/grey';

const classes = {
  footerContainer: {
    backgroundColor: grey[900],
    textAlign: "center",
    padding: '10px 0',
    color: '#fff'
  }
};
class FooterContainerComponent extends PureComponent {
  render() {
    const { classes } = this.props;
    return <div className={classes.footerContainer}>© 2018 Gamaliel Padillo </div>;
  }
}

export default withStyles(classes)(FooterContainerComponent);
