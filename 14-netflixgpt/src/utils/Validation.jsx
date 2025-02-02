

export const ValidatingForm =(email ,password)=>{

    const isEmailValid =/^\S+@\S+\.\S+$/.test(email)

    const isValidPassword = () => {
        // Regular expressions for password validation
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        return (
          password.length >= 8 &&
          symbolRegex.test(password) &&
          numberRegex.test(password) &&
          upperCaseRegex.test(password) &&
          lowerCaseRegex.test(password)
        );
      };

      let newErrors ={}

      if(!isEmailValid) {
        newErrors.email ="email required"
      }

      if(!isValidPassword()){
        newErrors.password="pass not valid it should conatin one capital one "
      }

    
    return newErrors
}