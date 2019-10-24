import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import PrivateRoute from "./component/~reuseables/molecules/PrivateRoute";
import GameArea from "./component/views/GameArea";

function App() {
  return (
      <div className="App">
        <Router>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/" component={GameArea} />
        </Router>
      </div>
  );
}

export default App;
