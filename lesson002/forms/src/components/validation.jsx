import React from "react";
import "../App.css";
import Password from "./inputs/password";
import Email from "./inputs/email";
import Login from "./inputs/login";

export default class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginValue: window.localStorage.getItem("setLoginValue")
        ? window.localStorage.getItem("setLoginValue")
        : "",
      passwordValue: window.localStorage.getItem("setPasswordValue")
        ? window.localStorage.getItem("setPasswordValue")
        : "",
      emailValue: window.localStorage.getItem("setEmailValue")
        ? window.localStorage.getItem("setEmailValue")
        : "",
      loginResult: "",
      passResult: "",
      emailResult: "",
      isDisabled: true,
    };
  }

  regexEmail =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

  regexLogin = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;

  regexPass =
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

  loginHandler = (event) => {
    this.setState({
      loginValue: event.target.value,
      isDisabled: this.DisableButton(),
    });
    if (this.regexLogin.test(event.target.value)) {
      this.setState({
        loginResult: "",
        isDisabled: false,
      });
    } else {
      this.setState({
        loginResult: "Invalid input value",
        isDisabled: true,
      });
    }
  };
  passwordHandler = (event) => {
    this.setState({
      passwordValue: event.target.value,
      isDisabled: this.DisableButton(),
    });
    if (this.regexPass.test(event.target.value)) {
      this.setState({ passResult: "", isDisabled: false });
    } else {
      this.setState({
        passResult: "Invalid password input",
        isDisabled: true,
      });
    }
  };
  emailHandler = (event) => {
    this.setState({
      emailValue: event.target.value,
      isDisabled: this.DisableButton(),
    });
    if (this.regexEmail.test(event.target.value)) {
      this.setState({ emailResult: "", isDisabled: false });
    } else {
      this.setState({ emailResult: "Invalid email input", isDisabled: true });
    }
  };

  DisableButton = () => {
    return (
      !this.state.loginValue ||
      !this.state.passwordValue ||
      !this.state.emailValue
    );
  };
  componentDidUpdate() {
    window.localStorage.setItem("setLoginValue", this.state.loginValue);
    window.localStorage.setItem("setPasswordValue", this.state.passwordValue);
    window.localStorage.setItem("setEmailValue", this.state.emailValue);
  }
  render() {
    return (
      <div id="container">
        <form action="#">
          <Login
            onChange={this.loginHandler}
            value={this.state.loginValue}
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
          <input type="submit" id="submit" disabled={this.state.isDisabled} />
        </form>
      </div>
    );
  }
}
