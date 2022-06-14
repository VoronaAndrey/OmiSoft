/* eslint-disable no-unneeded-ternary */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./LoginError.module.scss"
import { setError } from "../../store/actionCreators/auth";


function LoginError () {
    const dispatch = useDispatch()
    const error = useSelector((store)=>store.auth.error)

    function closeModal (){
        dispatch(setError(false))
    }

    return(
        <div className={style.modal}>
            <div className={style.modal_section}>
                <p>{error}</p>
                <button onClick={closeModal} type="button">Ok</button>
            </div>
        </div>
    )
}

export default LoginError;