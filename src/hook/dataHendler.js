import validateEmail from "./validateEmail"
import validatePassword from "./validatePassword"

function dataHendler(data, setData,setDataError) {
    if(data.target.name === "email"){
        setData(data.target.value)
        if(validateEmail(data.target.value)){
            setDataError(false)
            return
        } 
        setDataError('You have entered an invalid email address!')
    } 
    if(data.target.name === "password"){
        setData(data.target.value)
        if(validatePassword(data.target.value)){
            setDataError(false)
            return
        } 
        setDataError('Password must be between 4 and 10 characters long')
    } 
}
export default dataHendler;