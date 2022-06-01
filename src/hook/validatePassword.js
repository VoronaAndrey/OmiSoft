
function validatePassword (password) {
    console.log(password.length);
    if (password.length < 4 || password.length > 10){
      return false
    } 
      return true
  }

export default validatePassword;