import React from "react";
import { Link } from "react-router-dom";
import FormLogin from "../FormLogin/FormLogin";
import style from "./LoginSection.module.scss";

function LoginSection () {

    return(
    <div className={style.loginSection}>
        <h1>
            Member Login
        </h1>
        <FormLogin />
        <div className={style.sectionCreateAccount}>
            <Link className={style.createAccount} to='/login'>Create your Acccount </Link>
        </div>
    </div>
    )
}

export default LoginSection;