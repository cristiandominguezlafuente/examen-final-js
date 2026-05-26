//Array

let platosDisponibles = [
  {
    nombre: "Ensalada César",
    descripcion: "Ensalada con pollo, lechuga, queso y salsa César",
    tipo: "primero",
    precio: 8.5,
    foto: "ensalada.jpg",
  },
  {
    nombre: "Macarrones boloñesa",
    descripcion: "Pasta con salsa de tomate y carne picada",
    tipo: "primero",
    precio: 9.0,
    foto: "macarrones.jpg",
  },
  {
    nombre: "Pollo al horno",
    descripcion: "Pollo asado con patatas",
    tipo: "segundo",
    precio: 11.5,
    foto: "pollo.jpg",
  },
  {
    nombre: "Merluza a la plancha",
    descripcion: "Merluza con verduras salteadas",
    tipo: "segundo",
    precio: 12.0,
    foto: "merluza.jpg",
  },
];

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

let selectorPlatos = document.querySelector("#selectorPlatos");

function cargarPlatos() {
  selectorPlatos.innerHTML = "";

  for (let i = 0; i < platosDisponibles.length; i++) {
    let plato = platosDisponibles[i];

    selectorPlatos.innerHTML += `
      <option value="${i}">
        ${plato.nombre}
      </option>
    `;
  }
}

cargarPlatos();

// Ej 4

const btnVaciar = document.querySelector("#btnVaciar");
const contenedorCarta = document.querySelector("#contenedorCarta");

function borrarPlatos() {
  platosDisponibles.length = 0;
  contenedorCarta.innerHTML = "No hay platos que mostrar";
  contenedorCarta.classList.add("carta-vacia");
}

btnVaciar.addEventListener("click", borrarPlatos);
