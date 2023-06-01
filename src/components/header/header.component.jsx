import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/084 crown.svg";

import "./header.style.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {!currentUser ? (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        ) : (
          <div
            className="option"
            onClick={() => {
              auth.signOut().then(function () {
                console.log("Signed Out");
              });
            }}
          >
            SIGN OUT
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
