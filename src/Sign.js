import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Sign() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Please Sign up</h1>
      <Link to="/login" onClick={() => dispatch({ type: "LOGIN" })}>
        Login
      </Link>
    </div>
  );
}

export default Sign;
