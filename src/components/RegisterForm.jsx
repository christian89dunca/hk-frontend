import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { role: "", fullname: "", email: "", password: ""  },
    errors: {}
  };

  schema = {
    role: Joi.string()
      .required()
      .min(3)
      .max(30)
      .label("Role"),
    fullname: Joi.string()
      .required()
      .min(3)
      .max(30)
      .label("Full Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(3)
      .max(30)
      .label("Password"),
    
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register User</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("role", "Role")}
          {this.renderInput("fullname", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
