const nameValidation = (name, errors) => {
  if(!name){
    errors.name = "Requerido";
  } 
}

const lastnameValidation = (lastName, errors) => {
  if(!lastName){
    errors.lastName = "Requerido";
  } 
}

const emailValidator = {
  isValid: (email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  },
  error: "Ingrese un email válido por favor.",
};

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
  }else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(password)) {
    errors.password = "La contraseña debe tener al menos una letra, un número y un caracter especial";
  }
};

const confirmedPasswordValidation = (password, confirmedPassword, errors) => {
  if (!confirmedPassword) {
    errors.confirmedPassword = "Confirme su contraseña";
  } else if (confirmedPassword !== password){
    errors.confirmedPassword = "La contraseña no coincide, por favor inténtelo de nuevo";
  } 
};

const fileValidationExtensions = (image) => {
  const allowedExtensions = ["jpg", "png"];
  const extension = image.split(".").pop();
  let errorMessage;
  if(!image){
    errorMessage = "Escoja una foto de perfil";
  } else if (!allowedExtensions.includes(extension)) {
    errorMessage = "La imagen debe ser de formato .jpg o .png";
  } 
  return errorMessage; 
};

const VALID_IMAGE_FORMATS = ["jpg", "png"];

const imageValidator = {
  getFormat: (image) => {
    const splitFilePath = image.split(".");
    const extension = splitFilePath[splitFilePath.length - 1];
    return extension?.toLowerCase();
  },
  isValid: (imageFormat) => {
    return VALID_IMAGE_FORMATS.includes(imageFormat);
  },
  formatError: `El formato del archivo debe ser uno de los siguientes:  ${VALID_IMAGE_FORMATS.join(
    ", "
  )}.`,
};

export { 
  imageValidator, 
  emailValidator,
  fileValidationExtensions,
  emailValidation,
  nameValidation,
  lastnameValidation,
  passwordValidationEightLength,
  confirmedPasswordValidation
};
