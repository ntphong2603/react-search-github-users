import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthWrapper, Dashboard, Error, Login, PrivateRoute } from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
