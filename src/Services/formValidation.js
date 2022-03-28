const nameValidation = (name) => {
  let nameError;
  if(!name){
    nameError = "Requerido";
  } 
  return nameError;
}

const lastnameValidation = (lastName) => {
  let lastNameError;
  if(!lastName){
    lastNameError = "Requerido";
  } 
  return lastNameError;
}

const emailValidation = (email) => {
  let emailError;
    if (!email) {
        emailError = "Requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      emailError = "Email inválido";
    }
  return emailError;
};
        
const passwordValidationEightLength = (password) => {
  let passwordError;
    if (!password) {
        passwordError = "Requerido";
      } else if (password.length < 7){
        passwordError = "La contraseña debe tener un mínimo de 6 characteres";
      }else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(password)) {
        passwordError = "La contraseña debe tener al menos una letra, un número y un caracter especial";
      }

  return passwordError;
};

const confirmedPasswordValidation = (password, confirmedPassword) => {
  let confirmedPasswordError;
    if (!confirmedPassword) {
        confirmedPasswordError = "Confirme su contraseña";
      } else if (confirmedPassword !== password){
        confirmedPasswordError = "La contraseña no coincide, por favor inténtelo de nuevo";
      } 
  return confirmedPasswordError;
};

export {emailValidation, passwordValidationEightLength, confirmedPasswordValidation, nameValidation, lastnameValidation}      