/* eslint-disable consistent-return */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actionCreators/auth";
import style from "./HomePage.module.scss"
import Loader from "../../components/Loader/Loader";

function HomePage() {
   const dispatch=useDispatch()
   const isLoading = useSelector((store)=>store.auth.isLoading)

   function logoutUser () {
      dispatch(logout())
   }

  return (
    <div>
    { isLoading && <Loader/>}
    <div className={style.loginSection}>
      <button className={style.logout} onClick={logoutUser} type="button">Logout</button>
    </div>
    </div>
  );
}

export default HomePage;
