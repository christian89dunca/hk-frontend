import React, { Component } from "react";
import NavBar from "./common/navBar";
import Routes from "./components/Routes";
import auth from "./services/authService";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    console.log(user)
  }
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="container">
          <Routes user={this.state.user} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
