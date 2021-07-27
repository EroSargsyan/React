import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function EachPost({ items, deleteItem, editItem }) {
  let [isEditing, setIsEditing] = useState(true);
  let [newTitle, setNewTitle] = useState("");
  let [newContent, setNewContent] = useState("");
  let { ide } = useParams();
  const data = items.filter((item) => Number(ide) === item.id);
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
          {!isEditing ? (
            <>
              <Typography gutterBottom variant="h5" component="h2">
                {data[0].titleValue}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {data[0].contentValue}
              </Typography>
            </>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                type="text"
                name="title"
                placeholder="*Title"
                // value={this.state.title}
                onChange={(event) => {
                  setNewTitle(event.target.value);
                }}
              />
              <TextField
                placeholder="*Content"
                multiline
                rows={4}
                name="content"
                // value={this.state.content}
                onChange={(event) => {
                  setNewContent(event.target.value);
                }}
              />
            </div>
          )}
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
        <Button
          size="small"
          color="primary"
          onClick={() => {
            if (window.localStorage.getItem("login") === data[0].login) {
              // editItem(ide, data[0]);
              setIsEditing((isEditing = !isEditing));
            }
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            if (window.localStorage.getItem("login") === data[0].login) {
              console.log(newTitle, newContent);
              editItem(ide, newTitle, newContent);
              setIsEditing((isEditing = !isEditing));
            }
          }}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
