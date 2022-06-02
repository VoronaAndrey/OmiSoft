import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import validateEmail from '../../hook/validateEmail'
import validatePassword from '../../hook/validatePassword'
import blurHandler from '../../hook/blurHandler'
import dataHendler from '../../hook/dataHendler'
import style from './FormLogin.module.scss'
import emailIcon from '../../assets/email.png'
import passwordIcon from '../../assets/padlock.png'

function FormLogin () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDiry, setEmailDirty] = useState(false)
    const [passwordDiry, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Please fill in the Email field')
    const [passwordError, setPasswordError] = useState('Please fill in the password field')
    const [disabled, setDisabled]= useState(false)

    useEffect(()=>{
        if(validateEmail(email) && validatePassword(password)){
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    },[email,password])

    return(
        <div className={style.sectionLogin}>
            <form className={style.formLogin}>
                <div className={style.sectionInput}>
                    <input
                    onChange={e=> dataHendler(e,setEmail,setEmailError)}
                    className={style.inputLogin}
                    onBlur={e=>blurHandler(e,setEmailDirty)}
                    name='email' type='text'
                    placeholder='Email'
                    />
                    {(emailDiry && emailError) && <div className={style.validationError}>{emailError}</div>}
                    <div>
                        <img className={style.icon} src={emailIcon} alt='email'/>
                    </div>
                </div>
                <div className={style.sectionInput}>
                    <input
                    onChange={e=> dataHendler(e,setPassword,setPasswordError)}
                    className={style.inputLogin}
                    onBlur={e=>blurHandler(e,setPasswordDirty)}
                    name='password'
                    type='password'
                    placeholder='Password'
                    />
                    {(passwordDiry && passwordError) && <div className={style.validationError}>{passwordError}</div>}
                    <div>
                        <img className={style.icon} src={passwordIcon} alt='password'/>
                    </div>
                </div>
                <button className={style.submitBtn} type='submit' disabled={disabled}>LOGIN</button>
                <p className={style.forgout}>
                    Forgout
                    <Link to="/login">Username / Password</Link>
                </p>
            </form>
        </div>
    )
}

export default FormLogin
