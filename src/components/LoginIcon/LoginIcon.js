import React from "react";
import style from "./LoginIcon.module.scss"
import icon from "../../assets/loginIcon.jpg"

function LoginIcon () {

    return (
        <div className={style.loginIcon}>
            <img src={icon} alt="loginIcon"/>
        </div>
    )
}

export default LoginIcon;