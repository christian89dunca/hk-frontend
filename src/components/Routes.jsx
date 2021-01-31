import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import Projects from "./Projects";
import NotFound from "./NotFound";
import ProjectForm from "./ProjectForm";
import LoginForm from "./LoginForm";
import Login from "./Login";
import Logout from "./Logout";
// import RegisterForm from "./RegisterForm";
import ProtectedRoute from "../common/protectedRoute";

const Routes = ({ project }) => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/logout" component={Logout} />
      {/* <Route path="/register" component={RegisterForm} /> */}
      <ProtectedRoute path="/projects/:id" component={ProjectForm} />
      <Route
        path="/projects"
        render={props => <Projects {...props} project={project} />}
      />
      <Route path="/projects/new" component={ProjectForm} />  
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/projects" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
