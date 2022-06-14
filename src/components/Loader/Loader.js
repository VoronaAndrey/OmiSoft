import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BallTriangle} from "react-loader-spinner";
import style from "./Loader.module.scss";

function Loader () {  

    return(
        <div className={style.loader}>
            <BallTriangle
                height="100"
                width="100"
                color='blue'
                ariaLabel='loading'
            />
        </div>
    )
    }

export default Loader;






