//Ej 1

let cabeceraMenu = document.querySelector("#cabeceraMenu");
let fraseDia = document.querySelector("#fraseDia");
function cambiarFraseDelDia() {
  cabeceraMenu.innerHTML = fraseDia.value;
}

fraseDia.addEventListener("input", cambiarFraseDelDia);

//Ej 2
