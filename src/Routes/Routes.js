import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

function Routes() {
  return (
      <Switch>
        <Route exact path="/" >
          <Redirect to="/login"/>
        </Route>
        <Route path="/login" component={LoginPage} />
      </Switch>
  );
}

export default Routes;
