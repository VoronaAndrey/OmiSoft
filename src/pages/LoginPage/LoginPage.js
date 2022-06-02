import React from "react";
import LoginIcon from "../../components/LoginIcon/LoginIcon";
import LoginSection from "../../components/LoginSection/LoginSection";
import style from "./LoginPage.module.scss"

function LoginPage() {

  return (
    <div className={style.loginBlock}>
        <LoginIcon/>  
        <LoginSection/>
    </div>
  );
}

export default LoginPage;
