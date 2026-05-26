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

//Ej 3

let contenedorCarta = document.querySelector("#contenedorCarta");

function pintarCarta() {
  let html = "";

  for (let i = 0; i < platosDisponibles.length; i++) {
    html += `
      <div class="card">
        <h4>${platosDisponibles[i].nombre}</h4>
        <p>${platosDisponibles[i].descripcion}</p>
        <p>${platosDisponibles[i].precio} €</p>
      </div>
    `;
  }

  contenedorCarta.innerHTML = html;
}

pintarCarta();

//Ej 4

