import React, { PureComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
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
  homeBorder: {
    borderBottom: "2px dashed white",
    width: "60%"
  },
  homeText: {
    padding: "25px 0"
  },
  homeButtons: {
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    padding: "25px 0 0 0",
    width: "60%",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      height: "30%",
      justifyContent: "space-between"
    },
    "@media screen and (max-width: 960px)": {
      width: "75%"
    }
  },
  homeButton: {
    border: "1px solid #eee",
    backgroundColor: "rgba(0,0,0,0.0)",
    color: "#EEE",
    minWidth: "150px"
  },
  homeTextColor: {
    color: "#EEE"
  },
  homeBackground: {
    backgroundImage: `url(${elysian})`,
    backgroundSize: "cover",
    filter: "blur(3px)",
    height: "100%",
    position: "absolute",
    opacity: "0.8",
    top: "0",
    width: "100%",
    zIndex: "1"
  }
};
class HomeComponent extends PureComponent {
  render() {
    const { classes } = this.props;
    const links = [
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
      <div className="pageContainer">
        <div className={classes.homeContainer}>
          <div className={classes.homeBorder} />
          <div className={classes.homeText}>
            <Typography
              variant="display3"
              className={classes.homeTextColor}
              align="center"
              color="inherit">
              Gamaliel Padillo
            </Typography>
            <Typography
              variant="headline"
              className={classes.homeTextColor}
              align="center"
              color="inherit">
              Frontend Developer | Full-stack Developer
            </Typography>
          </div>
          <div className={classes.homeBorder} />
          <div className={classes.homeButtons}>
            {
              links.map((item, idx) => {
                return (
                  <Button component={Link} to={item.link} className={classes.homeButton} key={item.text+idx}>
                    {item.text}
                  </Button>
                )
              })
            }
          </div>
        </div>
        <div className={classes.homeBackground} />
      </div>
    );
  }
}

export default withStyles(classes)(HomeComponent);
