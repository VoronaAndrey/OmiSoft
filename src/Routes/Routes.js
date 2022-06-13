import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { checkAuth } from "../store/actionCreators/auth";
import RequireAuth from "../hoc/RequireAuth";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage/HomePage";

function Routes() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[])

  return (
      <Switch>
        <RequireAuth exact path="/" component={HomePage}/>
        <Route path="/login" component={LoginPage} />
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
  );
}

export default Routes;
