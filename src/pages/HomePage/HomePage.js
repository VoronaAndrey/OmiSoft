/* eslint-disable consistent-return */
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actionCreators/auth";
import style from "./HomePage.module.scss"

function HomePage() {
   const dispatch=useDispatch()
   function logoutUser () {
      dispatch(logout())
   }

  return (
    <div className={style.loginSection}>
     sda
    <button onClick={logoutUser} type="button">Logout</button>
    </div>
  );
}

export default HomePage;
