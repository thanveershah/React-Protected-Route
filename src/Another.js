import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Another extends Component {
  logout = () => {
    this.props.dispatch({
      type: "LOGOUT"
    });
  };

  render() {
    return (
      <div>
        <h1>Protected Page</h1>
        <Link to="/" onClick={this.logout}>
          Logout
        </Link>
      </div>
    );
  }
}

const setLogout = state => {
  return {
    logout: state
  };
};

export default connect(setLogout)(Another);
