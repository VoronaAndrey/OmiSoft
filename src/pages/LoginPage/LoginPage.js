import React from "react";
import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";

import style from "./LoginPage.module.scss"

function HomePage() {

  return (
    <div className={style.loginSection}>
      <h1>
        Member Login
      </h1>
      <FormLogin />
      <div className={style.sectionCreateAccount}>
        <Link className={style.createAccount} to='/'>Create your Acccount </Link>
      </div>
    </div>
  );
}

export default HomePage;
