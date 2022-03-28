const errors = {};

const nameValidation = (name) => {
  if(!name){
    errors.name = "Requerido";
  } else {
    delete errors.name;
  }
}

const lastnameValidation = (lastName) => {
  if(!lastName){
    errors.lastName = "Requerido";
  } else {
    delete errors.lastName;
  }
}

const emailValidation = (email) => {
    if (!email) {
          errors.email = "Requerido";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          errors.email = "Email inválido";
        } else {
            delete errors.email;
        }
};
        
const passwordValidationEightLength = (password) => {
    if (!password) {
        errors.password = "Requerido";
      } else if (password.length < 7){
        errors.password = "La contraseña debe tener un mínimo de 6 characteres";
      }else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(password)) {
        errors.password = "La contraseña debe tener al menos una letra, un número y un caracter especial";
      } else {
        delete errors.password;
    }
};

const confirmedPasswordValidation = (password, confirmedPassword) => {
    if (!confirmedPassword) {
        errors.confirmedPassword = "Confirme su contraseña";
      } else if (confirmedPassword !== password){
        errors.confirmedPassword = "La contraseña no coincide, por favor inténtelo de nuevo";
      } else {
        delete errors.confirmedPassword;
    }
};

export {emailValidation, passwordValidationEightLength, confirmedPasswordValidation, nameValidation, lastnameValidation, errors}

        