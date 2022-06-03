
function validatePassword (password) {
    if (password.length < 4 || password.length > 10){
      return false
    } 
      return true
  }

export default validatePassword;