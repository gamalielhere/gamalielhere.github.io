import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import className from "classnames";
import mypic from "../../assets/gamalielgad.jpg";
import echoPark from "../../assets/black-and-white-echo-park.jpg";
import laSkyline from "../../assets/la-skyline.jpg";

const classes = {
  root: {
    backgroundColor: "#EEE",
    display: "flex",
    justifyContent: "center",
    padding: "35px 0",
    width: "100%"
  },
  header: {
    textDecoration: "underline",
    lineHeight: "2",
    fontWeight: "bold"
  },
  imgContainer: {
    padding: "15px 0",
    textAlign: "center",
    width: "100%",
  },
  img: {
    maxWidth: "500px",
    width: "100%"
  },
  rootItem: {
    width: "720px"
  },
  greetingContainer: {
    display: "flex",
    padding: "15px 0",
    flexDirection: "row",
    justifyContent: "space-around",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      justifyContent: "space-between"
    },
  },
  greeting: {
    backgroundColor: "#fff",
    flex: "55",
    padding: "5em 2em"
  },
  links: {
    display: "flex",
    flex: "40",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  linkButton: {
    alignItems: "center",
    display: "flex",
    flex: "45",
    height: "100%",
    justifyContent: "center",
    position: "relative",
    zIndex: "2"
  },
  linkContainer: {
    height: "100%",
    position: "relative"
  },
  linkText: {
    backgroundColor: "#fff",
    color: "rgba(0,0,0,0.7)",
    padding: "10px",
    textDecoration: "underline"
  },
  backgroundProjects: {
    backgroundImage: `url(${echoPark})`,
    backgroundSize: "cover",
    height: "100%",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: "1"
  },
  backgroundConnect: {
    backgroundImage: `url(${laSkyline})`,
    backgroundSize: "cover",
    height: "100%",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: "1"
  }
};

class AboutLayout extends PureComponent {
  render() {
    const { classes } = this.props;
    const items = [
      {
        link: "/projects",
        name: "Projects",
        class: "backgroundProjects"
      },
      {
        link: "/connect",
        name: "Connect",
        class: "backgroundConnect"
      }
    ]
    return (
      <div className={className("pageContainer", classes.root)}>
        <div className={classes.rootItem}>
          <Typography variant="headline" component="h1" align="center" className={classes.header}> HELLO! </Typography>
          <Typography variant="subheading" component="p" align="center">
            I'm an experienced Full-stack Software Developer who can bring a diverse skill set and creative drive to software development.
          </Typography>
          <div className={classes.imgContainer}>
            <img title="Gamaliel Padillo vanity shot" alt="Gamaliel Padillo vanity shot" src={mypic} className={classes.img} />
          </div>
          <div className={classes.greetingContainer}>
            <div className={classes.greeting}>
              <Typography variant="body1" component="p" >
                Hey there! I am Gamaliel, Yel for short. I'm a software developer with a passion for creating and learning new things.
                I believe that no one really stops learning - so we should all strive to learn something new everyday!
                When I'm not trying to learn something, I'm usually programming. It could be for this website, or anything else. I try to
                program everyday if possible.
                <br />
                <br />
                I have more projects in the making so stay tuned!
              </Typography>
            </div>
            <div className={classes.links}>
              {items.map((item, idx) => {
                return (
                  <div className={classes.linkContainer} key={item.name + idx}>
                    <Button component={Link} to={item.link} className={classes.linkButton}>
                      <Typography variant="subheading" align="center" className={classes.linkText}> {item.name} </Typography>
                    </Button>
                    <div className={classes[item.class]}></div>
                  </div>  
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(classes)(AboutLayout);
