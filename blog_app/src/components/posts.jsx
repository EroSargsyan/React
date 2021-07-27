import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Posts({ items }) {
  const classes = useStyles();
  return items.map((el) => {
    return (
      <div
        style={{ marginTop: "7em", maxWidth: "50em", marginLeft: "25em" }}
        key={Math.ceil(Math.random() * 10)}
      >
        <Card
          className={classes.root}
          style={{ marginTop: "5em", maxWidth: "80em" }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="subtitle2"
              >
                {el.date} by: {el.login}
              </Typography>
              <Typography gutterBottom variant="h4" component="h2">
                {el.titleValue}
              </Typography>
              <Typography variant="h5" color="textSecondary" component="p">
                {el.contentValue}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/posts/${el.id}`}>
              <Button
                size="small"
                color="primary"
                style={{ marginLeft: "40em", marginBottom: "2em" }}
              >
                Learn More
              </Button>
            </Link>
          </CardActions>
        </Card>
        <br />
        <br />
        <br />
      </div>
    );
  });
}
