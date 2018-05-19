import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  card: {
    maxWidth: 345,
    flex: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  description: {
    height: 180
  }
};

const ProjectContainer = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia className={classes.media}
          image={props.img}
          title={props.title} />
        <CardContent className={classes.description}>
          <Typography gutterBottom variant="headline" component="h2">
            {props.appName}
          </Typography>
          <Typography component="p">
            {props.description1}
          </Typography>
          <Typography component="p">
            {props.description2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={"a"} href={props.link} target="_blank">Try</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default withStyles(styles)(ProjectContainer);
