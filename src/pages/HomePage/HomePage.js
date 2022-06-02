/* eslint-disable consistent-return */
import React from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/actionCreators/auth";
import style from "./HomePage.module.scss"

function HomePage() {
   const dispatch=useDispatch()
   function logout () {
      dispatch(setAuth(false))
   }

  return (
    <div className={style.loginSection}>
     sda
    <button onClick={logout} type="button">Logout</button>
    </div>
  );
}

export default HomePage;
