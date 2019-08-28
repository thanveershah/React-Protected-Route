import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Another from "./Another";
import PrivateRoute from "./Auth";
import Sign from "./Sign";

class App extends Component {
  state = {
    counter: 1
  };

  render() {
    return (
      <div className="container">
        <Router>
          <Route path="/" exact component={Person} />
          <Route path="/sign" component={Sign} />
          <PrivateRoute path="/login" component={Another} />
        </Router>
      </div>
    );
  }
}

export default App;
