import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function Auth({ component: Component, ...rest }) {
  const counter = useSelector(state => state);
  return (
    <Route
      {...rest}
      render={props =>
        counter ? <Component {...props} /> : <Redirect to="/sign" />
      }
    />
  );
}

export default Auth;
