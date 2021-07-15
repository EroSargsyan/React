import React from "react";
import "../App.css";
import Password from "./inputs/password";
import Email from "./inputs/email";
import Login from "./inputs/login";

export default class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regexEmail:
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      regexLogin: /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/,
      regexPass:
        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
      loginValue: "",
      passwordValue: "",
      emailValue: "",
      loginResult: "",
      passResult: "",
      emailResult: "",
    };
  }

  loginHandler = (event) => {
    this.setState({ loginValue: event.target.value });
    if (this.state.regexLogin.test(event.target.value)) {
      this.setState({ loginResult: "Valid input value" });
    } else {
      this.setState({ loginResult: "Invalid input value" });
    }
  };
  passwordHandler = (event) => {
    this.setState({ passwordValue: event.target.value });
    if (this.state.regexPass.test(event.target.value)) {
      this.setState({ passResult: "Valid password input" });
    } else {
      this.setState({ passResult: "Invalid password input" });
    }
  };
  emailHandler = (event) => {
    this.setState({ emailValue: event.target.value });
    if (this.state.regexEmail.test(event.target.value)) {
      this.setState({ emailResult: "Valid email input" });
    } else {
      this.setState({ emailResult: "Invalid email input" });
    }
  };

  render() {
    return (
      <div id="container">
        <form action="#">
          <Login
            onChange={this.loginHandler}
            value={this.state.inputValue}
            result={this.state.loginResult}
          />
          <Password
            onChange={this.passwordHandler}
            value={this.state.passwordValue}
            result={this.state.passResult}
          />
          <Email
            onChange={this.emailHandler}
            value={this.state.emailValue}
            result={this.state.emailResult}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
