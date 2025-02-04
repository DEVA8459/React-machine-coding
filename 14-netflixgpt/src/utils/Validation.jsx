export const ValidatingForm = (formData, signin) => {
  let newErrors = {};

  const isEmailValid = /^\S+@\S+\.\S+$/.test(formData.email);

  const isValidPassword = () => {
    // Regular expressions for password validation
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      formData.password.length >= 8 &&
      symbolRegex.test(formData.password) &&
      numberRegex.test(formData.password) &&
      upperCaseRegex.test(formData.password) &&
      lowerCaseRegex.test(formData.password)
    );
  };

  if (!formData.email) {
    newErrors.email = "email cannot be empty";
  } else if (!isEmailValid) {
    newErrors.email = "email must be in abc@xyz.com fromat";
  }

  if (signin) {
    if (!formData.fullName) {
      newErrors.fullName = "full name cannot be empty";
    }
  }

  if (signin) {
    if (!formData.contact) {
      newErrors.contact = "contact cannot be empty ";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "contact must have 10 numbers ";
    }
  }

  if (!formData.password) {
    newErrors.password = "password cant be blank";
  } else if (!isValidPassword()) {
    newErrors.password =
      "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
  }

  if (signin) {
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "confirm password cant be blank";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Password not match";
    }
  }

  return newErrors;
};
