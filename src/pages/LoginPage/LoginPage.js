import React from "react";
import { useSelector } from "react-redux";
import LoginIcon from "../../components/LoginIcon/LoginIcon";
import LoginSection from "../../components/LoginSection/LoginSection";
import Loader from "../../components/Loader/Loader";
import style from "./LoginPage.module.scss"
import LoginError from "../../components/LoginError/LoginError";

function LoginPage() {
  const isLoading = useSelector((store)=>store.auth.isLoading)
  const error = useSelector((store)=>store.auth.error)

  return (
    <div>
    {error && <LoginError/>} 
    <div className={style.loginBlock}>

        { isLoading && <Loader/>}
        <LoginIcon/>  
        <LoginSection/>
    </div>
    </div>
  );
}

export default LoginPage;
