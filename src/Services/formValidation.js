const nameValidation = (name, errors) => {
  if(!name){
    errors.name = "Requerido";
  } 
  return errors;
}

const lastnameValidation = (lastName, errors) => {
  if(!lastName){
    errors.lastName = "Requerido";
  } 
  return errors;
}

const emailValidation = (email, errors) => {
    if (!email) {
      errors.email = "Requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Email inválido";
    }
  return errors;
};
        
const passwordValidationEightLength = (password, errors) => {
    if (!password) {
      errors.password = "Requerido";
      } else if (password.length < 7){
        errors.password = "La contraseña debe tener un mínimo de 6 characteres";
      }else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(password)) {
        errors.password = "La contraseña debe tener al menos una letra, un número y un caracter especial";
      }

  return errors;
};

const confirmedPasswordValidation = (password, confirmedPassword, errors) => {
    if (!confirmedPassword) {
      errors.confirmedPassword = "Confirme su contraseña";
      } else if (confirmedPassword !== password){
        errors.confirmedPassword = "La contraseña no coincide, por favor inténtelo de nuevo";
      } 
  return errors;
};

export {emailValidation, passwordValidationEightLength, confirmedPasswordValidation, nameValidation, lastnameValidation}      