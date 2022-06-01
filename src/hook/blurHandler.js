function blurHandler  (e, func){
    if(e.target.name === "email"){
        func(true)
    } 
    if(e.target.name === "password"){
        func(true)
    } 
}
export default blurHandler;