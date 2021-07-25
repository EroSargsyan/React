import React from "react";
import auth from "./authenticate";
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
        }}
      >
        <div>
          <h2>Log in</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="login"
            id="login"
            onChange={this.loginInput}
          />
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.passwordInput}
          />
          <input
            type="button"
            value="Log In"
            onClick={() => {
              if (this.state.login !== "" && this.state.password !== "") {
                auth.login(() => {
                  this.props.history.push("/createpost");
                });
              } else {
                alert("Enter login/password");
              }
            }}
          />
        </div>
      </div>
    );
  }
}
