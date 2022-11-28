let inputCheckbox = document.getElementById("inputCheckbox")
let buttonSubmit = document.getElementById("buttonSubmit")
let nombreTable;

function validarEmail() {
  const regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let inputName = document.getElementById("inputName");
  let inputEmail = document.getElementById("inputEmail");
  let inputPassword = document.getElementById("inputPassword");
  if(inputName.value === "" || inputPassword.value === ""){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Complete los campos',
      showConfirmButton: true,
      timer: 1500
    })
  } else {
    if (inputEmail.value.match(regExp)){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Formulario Enviado',
        showConfirmButton: true,
        timer: 1500
      })
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Formulario Denegado',
        showConfirmButton: true,
        timer: 1500
      })
    }
  }
}

buttonSubmit.addEventListener("click", (event)=> {
    event.preventDefault()
    let inputName = document.getElementById("inputName");
    let inputEmail = document.getElementById("inputEmail");
    let inputPassword = document.getElementById("inputPassword");
    console.log(`El nombre es ${inputName.value}, el email es ${inputEmail.value} y la contraseña es ${inputPassword.value}`);
    validarEmail();
})