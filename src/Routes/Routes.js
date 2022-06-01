import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
      </Switch>
  );
}

export default Routes;
