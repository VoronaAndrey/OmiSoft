/* eslint-disable react/prop-types */
/* eslint-disable no-else-return  */
/* eslint-disable react/forbid-prop-types  */
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function RequireAuth ({component: Component}) {
  const auth = useSelector((store)=>store.auth.isAuth)
  console.log(auth);
  return(
    <Route
      render={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to='/login' />
          ); 
        }
      }}
    />
  );

}

export default RequireAuth;
