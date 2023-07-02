import React, { Component } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/hompage.component";
import Shop from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndUp from "./pages/sign-in-and-up/sign-in-and-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          });
          console.log(this.setState);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path="/shop" Component={Shop} />
          <Route exact path="/checkout" Component={CheckoutPage} />
          <Route exact path="/signIn" Component={SignInAndUp} />
        </Routes>
      </div>
    );
  }
}

const mapToStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapToStateProps, mapDispatchToProps)(App);
