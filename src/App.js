import React, { Component } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/hompage.component";
import Shop from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndUp from "./pages/sign-in-and-up/sign-in-and-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: { user } });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path="/shop" Component={Shop} />
          <Route path="/signIn" Component={SignInAndUp} />
        </Routes>
      </div>
    );
  }
}

export default App;
