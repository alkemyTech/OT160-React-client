import Swal from 'sweetalert2';

function infoAlert(infoTitle, infoToDisplay) {
  Swal.fire({
    title: infoTitle,
    text: infoToDisplay,
    icon: 'info',
    confirmButtonText: 'Entendido',
  });
}

function errorAlert(errorTitle, errorDescription) {
  Swal.fire({
    title: errorTitle,
    text: errorDescription,
    icon: 'error',
    confirmButtonText: 'Aceptar',
  });
}

async function confirmAlert(confirmQuestion, comment, actionOnConfirm) {
  const { isConfirmed } = await Swal.fire({
    title: confirmQuestion,
    text: comment,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  });

  if (isConfirmed) {
    actionOnConfirm();
  }
}

export { infoAlert, errorAlert, confirmAlert };
