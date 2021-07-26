import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function EachPost({ items, deleteItem }) {
  let { ide } = useParams();
  const data = items.filter((item) => ide == item.id);
  const history = useHistory();
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      style={{ marginTop: "7em", maxWidth: "50em", marginLeft: "25em" }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data[0].date} by: {data[0].login}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {data[0].titleValue}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data[0].contentValue}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            if (window.localStorage.getItem("login") === data[0].login) {
              history.push("/posts");
              deleteItem(ide);
            }
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
