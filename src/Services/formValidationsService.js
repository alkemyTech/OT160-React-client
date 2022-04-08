/* const emailValidation = (email) => {
  let emailError;
  if (!email) {
    emailError = 'Requerido';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    emailError = 'Email inválido';
  } 
  return emailError;
}; */

const emailValidation = (email, errors) => {
  if (!email) {
    errors.email = "Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Email inválido";
  }
};

const nameValidation = (name, errors) => {
  if(!name){
    errors.name = "Requerido";
  } 
}

const nameValidationFourLength = (name, errors) => {
  if(name.length === 0){
    errors.name = "Agregue su nombre de usuario";
  } else if (name.length < 4){
    errors.name = "El nombre de usuario debe ser de al menos 4 caracteres";
  } 
};

const lastNameValidation = (lastName, errors) => {
  if(!lastName){
    errors.lastName = "Requerido";
  } 
}
  
const passwordValidationEightLength = (password, errors) => {
  if(password === ""){
    errors.password = "Ingrese su contraseña";
  } else if(password.length < 7){
    errors.password = "La contraseña debe tener un mínimo de 8 caracteres";
  } 
};
  
/* 
const passwordValidationEightLength = (password, errors) => {
  if (!password) {
    errors.password = "Requerido";
  } else if (password.length < 7){
    errors.password = "La contraseña debe tener un mínimo de 7 characteres";
  }else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(password)) {
    errors.password = "La contraseña debe tener al menos una letra, un número y un caracter especial";
  }
};
 */
const confirmedPasswordValidation = (password, confirmedPassword, errors) => {
  if (!confirmedPassword) {
    errors.confirmedPassword = "Confirme su contraseña";
  } else if (confirmedPassword !== password){
    errors.confirmedPassword = "La contraseña no coincide, por favor inténtelo de nuevo";
  } 
};


/* const fileValidationExtensions = (e) => {
  let file = e.target.value;
  const allowedExtensions = /(\.jpg|\.png)$/i;
  let errorMessage;
  if(!file){
    errorMessage = "Escoja una foto de perfil";
  } else if (!allowedExtensions.exec(file)) {
    errorMessage = "La imagen debe ser de formato .jpg o .png";
  } 
  return errorMessage;
};
 */
const fileValidationExtensions = (image, errors) => {
  const VALID_IMAGE_FORMATS = ["jpg", "png"];
  const extension = image.split(".").pop();
  if(!image){
    errors.image = "Escoja una foto de perfil";
  } else if (!VALID_IMAGE_FORMATS.includes(extension)) {
    errors.image = "La imagen debe ser de formato .jpg o .png";
  } 
};


export { 
  nameValidationFourLength, 
  passwordValidationEightLength, 
  fileValidationExtensions,
  emailValidation,
  nameValidation,
  lastNameValidation,
  confirmedPasswordValidation
};
