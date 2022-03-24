const errors = {};

const emailValidation = (email) => {
    if (email === "") {
        errors.email = 'Requerido';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
      ) {
        errors.email = 'Email inválido';
      } else {
          delete errors.email;
      }
}

const nameValidationFourLength = (name) => {
    if(name === ""){
        errors.name = "Agregue su nombre de usuario";
    } else if (name.length < 4){
        errors.name = "El nombre de usuario debe ser de al menos 4 caracteres";
    }
}
  
const passwordValidationEightLength = (password) => {
    if(password === ""){
        errors.password = "Ingrese su contraseña";
    } else if(password.length < 8){
        errors.password = "La contraseña debe tener un mínimo de 8 caracteres";
    } else {
        delete errors.password;
    }
}
  
const fileValidation_JPG_PNG = (e) => {
    let file = e.target.value;
    const allowedExtensions = /(\.jpg|\.png)$/i;
    let errorMessage;
    if(!file){
        errorMessage = "Escoja una foto de perfil";
    } else {
      if (!allowedExtensions.exec(file)) {
        errorMessage = "La imagen debe ser de formato .jpg o .png";
      } 
    }

    return errorMessage;
  };

export {emailValidation, nameValidationFourLength, passwordValidationEightLength, fileValidation_JPG_PNG, errors}