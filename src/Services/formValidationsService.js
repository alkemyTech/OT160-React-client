const nameValidation = (name, errors) => {
  if(!name){
    errors.name = "Requerido";
  } 
}

const lastNameValidation = (lastName, errors) => {
  if(!lastName){
    errors.lastName = "Requerido";
  } 
}

const emailValidation = (email, errors) => {
  if (!email) {
    errors.email = "Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Email inválido";
  }
};
      
const passwordValidationEightLength = (password, errors) => {
  if (!password) {
    errors.password = "Requerido";
  } else if (password.length < 7){
    errors.password = "La contraseña debe tener un mínimo de 6 characteres";
  }
};

const confirmedPasswordValidation = (password, confirmedPassword, errors) => {
  if (!confirmedPassword) {
    errors.confirmedPassword = "Confirme su contraseña";
  } else if (confirmedPassword !== password){
    errors.confirmedPassword = "La contraseña no coincide, por favor inténtelo de nuevo";
  } 
};

const fileValidationExtensions = (image, errors) => {
  const allowedExtensions = ["jpg", "png"];
  const extension = image.split(".").pop();
  if(!image){
    errors.image = "Escoja una foto de perfil";
  } else if (!allowedExtensions.includes(extension)) {
    errors.image = "La imagen debe ser de formato .jpg o .png";
  } 
};

const terminos = (name,errors) => {
  if(Object.keys(errors).length == 0 && name) {
    errors.terminos = "Debe aceptar los terminos y condiciones"
  }
};

export { 
  fileValidationExtensions,
  emailValidation,
  nameValidation,
  lastNameValidation,
  passwordValidationEightLength,
  confirmedPasswordValidation,
  terminos
};
