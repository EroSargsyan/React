import { Button, TextField } from "@material-ui/core";
import React from "react";
import auth from "../../services/authenticate";
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }

  loginInput = (event) => {
    this.setState((prevState) => {
      return { ...prevState, login: event.target.value };
    });
  };

  passwordInput = (event) => {
    this.setState((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "10em",
        }}
      >
        <div>
          <h2>Log in</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            type="text"
            name="login"
            id="login"
            onChange={this.loginInput}
            style={{ height: 25, marginTop: 20, width: "20em  " }}
            placeholder="Login"
          />
          <TextField
            type="password"
            name="password"
            id="password"
            onChange={this.passwordInput}
            style={{ height: 25, marginTop: 20, width: "20em  " }}
            placeholder="Password"
          />
          <Button
            variant="contained"
            color="primary"
            type="button"
            style={{ height: 35, marginTop: 20 }}
            onClick={() => {
              if (this.state.login !== "" && this.state.password !== "") {
                auth.login(() => {
                  this.props.history.push("/createpost");
                });
                window.localStorage.setItem("login", this.state.login);
                window.localStorage.setItem("authentificate", true);
              } else {
                alert("Enter login/password");
              }
            }}
          >
            Log in
          </Button>
        </div>
      </div>
    );
  }
}
