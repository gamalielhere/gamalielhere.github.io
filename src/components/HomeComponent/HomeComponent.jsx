import React, { PureComponent } from "react";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import elysian from "../../assets/la-skyline-elysian-park.jpg";
const classes = {
  homeContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    zIndex: "3"
  },
  homeButtons: {
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    padding: "25px 0 0 0",
    width: "60%",
    "@media screen and (max-width: 500px)": {
      flexDirection: "column",
      height: "20%",
      padding: "0"
    }
  },
  homeButton: {
    border: "1px solid rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#EEEEEE"
  },
  homeBackground: {
    backgroundImage: `url(${elysian})`,
    backgroundSize: "cover",
    filter: "blur(3px)",
    height: "100%",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: "1"
  }
};
class HomeComponent extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className="pageContainer">
        <div className={classes.homeContainer}>
          <Typography variant="display2">Gamaliel Padillo</Typography>
          <Typography variant="headline">Full-stack Developer</Typography>
          <div className={classes.homeButtons}>
            <Button
              className={classes.homeButton}
              component={Link}
              to="/projects">
              Projects
            </Button>
            <Button className={classes.homeButton} component={Link} to="/about">
              About
            </Button>
            <Button
              className={classes.homeButton}
              component={Link}
              to="/connect">
              Connect
            </Button>
          </div>
        </div>
        <div className={classes.homeBackground} />
      </div>
    );
  }
}

export default withStyles(classes)(HomeComponent);
