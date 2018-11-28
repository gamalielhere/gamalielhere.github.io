import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import ProjectContainer from "./ProjectContainerComponent";
import gadit from "../../assets/GAdit.png";
import parkhere from "../../assets/ParkHere.png";
import snake from "../../assets/Snake.png";
import starwarsttt from "../../assets/StarWars-TTT.png";
import classNames from "classnames";

const styles = {
  root: {
    alignItems: "center",
    backgroundColor: "#eee",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
};

class ProjectComponent extends PureComponent {
  render() {
    const { classes } = this.props;
    const data = [
      {
        name: "StarWars Tic-Tac-Toe",
        description1: `Simple StarWars themed Tic Tac Toe game`,
        description2: `This game is created with HTML5, CSS, Javascript, and jQuery`,
        img: starwarsttt,
        link: "http://www.gamalielpadillo.com/ttt/"
      },
      {
        name: "Snake!",
        description1: `Retro Snake game from the old days when we didn't have iPhones now on a website!`,
        description2: `This game is created with HTML5, CSS, Javascript, HTML5 Canvas, and Firebase for it's Database.`,
        img: snake,
        link: "http://www.gamalielpadillo.com/snake/"
      },
      {
        name: "GAdit",
        description1: `Reddit parody website that lets users Create, Read, Update and Delete data.`,
        description2: `This is a fullstack web app built with Ruby on Rails, HTML, ERB, Javascript, jQuery, SCSS, Ruby, PostgreSQL, and shipped in Heroku.`,
        img: gadit,
        link: "https://gadit.herokuapp.com"
      },
      {
        name: "ParkHere",
        description1: `ParkHere is a parking app that lets users inform other users what the parking situation of a restaurant is.`,
        description2: `This is a fullstack web app built with NodeJS, HTML, Javascript, AngularJS, SCSS, ExpressJS, MongoDB, Yelp API v2, and shipped in Heroku.`,
        img: parkhere,
        link: "https://park-here-app.herokuapp.com/#/"
      }
    ];
    return (
      <div className={classNames("pageContainer", classes.root)}>
        {data.map((app, idx) => {
          return (
            <ProjectContainer
              appName={app.name}
              description1={app.description1}
              description2={app.description2}
              img={app.img}
              link={app.link}
              key={app.name + idx}
            />
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(ProjectComponent);
