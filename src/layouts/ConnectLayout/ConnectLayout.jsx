import React, { PureComponent } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import github from "../../assets/iconmonstr-github-1-240.png";
import instagram from "../../assets/iconmonstr-instagram-1-240.png";
import linkedin from "../../assets/iconmonstr-linkedin-1-240.png";
import twitter from "../../assets/iconmonstr-twitter-1-240.png";

const classes = {
  root: {
    height: "50%",
    backgroundColor: "#eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  linkContainer: {
    display: "flex",
    height: "50%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  email: {
    backgroundColor: "#FF5752",
    height: "100%",
    width: "100%",
    "&:hover": {
      backgroundColor: "#ffb0ad"
    }
  },
  github: {
    backgroundColor: "#24292e",
    height: "100%",
    width: "100%",
    "&:hover": {
      backgroundColor: "#3a424a"
    }
  },
  twitter: {
    backgroundColor: "#00aced",
    height: "100%",
    width: "100%",
    "&:hover": {
      backgroundColor: "#6bd8ff"
    }
  },
  instagram: {
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    height: "100%",
    width: "100%",
    "&:hover": {
      background:
        "radial-gradient(circle at 30% 107%, #fef8b9 0%, #fef8b9 5%, #fe9086 45%,#e878c5 60%,#86a1f4 90%)"
    }
  },
  linkedin: {
    background: "#0077B5",
    height: "100%",
    width: "100%",
    "&:hover": {
      backgroundColor: "#0fabff"
    }
  }
};
class ConnectLayout extends PureComponent {
  render() {
    const { classes } = this.props;
    const links = [
      {
        text: "Github",
        link: "https://github.com/gamalielhere",
        classes: "github",
        img: github
      },
      {
        text: "Twitter",
        link: "https://twitter.com/GamalielHere",
        classes: "twitter",
        img: twitter
      },
      {
        text: "Instagram",
        link: "https://www.instagram.com/gamalielhere/",
        classes: "instagram",
        img: instagram
      },
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/gamalielpadillo/",
        classes: "linkedin",
        img: linkedin
      }
    ];
    return (
      <div className="pageContainer">
        <div className={classes.root}>
          <Typography variant="headline" component="p">
            Connect with me!
          </Typography>
          <Typography variant="subheading" component="p">
            Find me on any of these links:
          </Typography>
        </div>
        <div className={classes.linkContainer}>
          {links.map(item => {
            return (
              <Button
                component="a"
                key={item.text + item.classes}
                href={item.link}
                target="_blank"
                className={classes[item.classes]}>
                <img
                  title={item.text}
                  alt={item.text}
                  src={item.img}
                  width="75"
                />
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(classes)(ConnectLayout);
