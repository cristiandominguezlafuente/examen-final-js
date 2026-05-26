//Ej 1

let cabeceraMenu = document.querySelector("#cabeceraMenu");
let fraseDia = document.querySelector("#fraseDia");
function cambiarFraseDelDia() {
  cabeceraMenu.innerHTML = fraseDia.value;
}

fraseDia.addEventListener("input", cambiarFraseDelDia);

// Ej 2
let selectorDia = document.querySelector("#selectorDia");

function seleccionarDia() {
  cabeceraMenu.innerHTML = fraseDia.value + " - " + selectorDia.value;
}

selectorDia.addEventListener("change", seleccionarDia);

// Ej 3
