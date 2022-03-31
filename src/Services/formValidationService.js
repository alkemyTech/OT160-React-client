const emailValidation = (email) => {
  let emailError;
    if (email === "") {
        emailError = 'Requerido';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
      ) {
        emailError = 'Email inválido';
      } 
  return emailError;
}

const nameValidationFourLength = (name) => {
  let nameError;
    if(name.length === 0){
        nameError = "Agregue su nombre de usuario";
    } else if (name.length < 4){
        nameError = "El nombre de usuario debe ser de al menos 4 caracteres";
    } 
  return nameError;
}
  
const passwordValidationEightLength = (password) => {
  let passwordError;
    if(password === ""){
        passwordError = "Ingrese su contraseña";
    } else if(password.length < 8){
        passwordError = "La contraseña debe tener un mínimo de 8 caracteres";
    } 
  return passwordError;
}
  
const fileValidationExtensions = (e) => {
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

export {
  emailValidation, 
  nameValidationFourLength, 
  passwordValidationEightLength, 
  fileValidationExtensions
}