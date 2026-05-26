//Array

let platosDisponibles = [
  {
    nombre: "Ensalada César",
    descripcion: "Ensalada con pollo, lechuga, queso y salsa César",
    tipo: "primero",
    precio: 8.5,
    foto: "img/ensalada.jpg",
  },
  {
    nombre: "Macarrones boloñesa",
    descripcion: "Pasta con salsa de tomate y carne picada",
    tipo: "primero",
    precio: 9.0,
    foto: "img/macarrones.jpg",
  },
  {
    nombre: "Pollo al horno",
    descripcion: "Pollo asado con patatas",
    tipo: "segundo",
    precio: 11.5,
    foto: "img/pollo.jpg",
  },
  {
    nombre: "Merluza a la plancha",
    descripcion: "Merluza con verduras salteadas",
    tipo: "segundo",
    precio: 12.0,
    foto: "img/merluza.jpg",
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
  cabeceraMenu.innerHTML = fraseDia.value + " " + selectorDia.value;
}

selectorDia.addEventListener("change", seleccionarDia);

//Ej 3 + 6

let contenedorCarta = document.querySelector("#contenedorCarta");
let cartaComida = "";

function pintarCarta() {
  for (let i = 0; i < platosDisponibles.length; i++) {
    cartaPlato += `
      <div class="card">
        <h4>${platosDisponibles[i].nombre}</h4>
        <p>${platosDisponibles[i].descripcion}</p>
        <p>${platosDisponibles[i].precio} €</p>
        <img src="${platosDisponibles[i].foto}" alt="${platosDisponibles[i].nombre}" width="200px">
      </div>
    `;
  }

  contenedorCarta.innerHTML = cartaPlato;
}

pintarCarta();

//Ej 4

let btnVaciar = document.querySelector("#btnVaciar");
let seccionCarta = document.querySelector("#seccionCarta");

function vaciarCarta() {
  seccionCarta.innerHTML = "No hay platos que mostrar";
  seccionCarta.classList.add("carta-vacia");
}

btnVaciar.addEventListener("click", vaciarCarta);

//Ej 7

let contenedorMenu = document.querySelector("#contenedorMenu");
let menuPrimeros = document.querySelector(platosDisponibles.tipo);
let menuSegundos = document.querySelector(platosDisponibles.tipo);
function pintarMenu() {
  for (let i = 0; i < platosDisponibles.length; i++) {}
}
