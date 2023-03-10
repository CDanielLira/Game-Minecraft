// Variables para guardar las cajas donde se colocan los animales
var cajaAnimales = {};

// Obtener el contenedor principal
var contenedor1 = document.getElementById("contenedor1");
var contenedor2 = document.getElementById("contenedor2");
var Cajanom = document.getAnimations("nombres");

// Funciones para manejar los eventos de arrastrar y soltar
function allowDrop(event) {
  event.preventDefault();
}

function nombresMin() {
  var Cajanom = document.getElementById("nombres");
  var nom = ["Gato", "Cerdo", "Llama", "Oveja", "Pollo", "Perro"];
  let lista = [];
  let lista2 = [];
  let repetido;
  for (let i = 0; i < 6; i++) {
    while (!lista[i]) {
      repetido = true;
      while (repetido == true) {
        let random = Math.random();
        random = random * 6 + 1;
        random = Math.trunc(random);
        for (let j = 0; j < lista.length; j++) {
          if (lista[j] == random) {
            repetido = true;
            break;
          } else {
            repetido = false;
          }
        }
        lista[i] = random;
      }
    }
  }
  for (let i = 0; i < 6; i++) {
    while (!lista2[i]) {
      repetido = true;
      while (repetido == true) {
        let random = Math.random();
        random = random * 6 + 1;
        random = Math.trunc(random);
        for (let j = 0; j < lista2.length; j++) {
          if (lista2[j] == random) {
            repetido = true;
            break;
          } else {
            repetido = false;
          }
        }
        lista2[i] = random;
      }
    }
  }
  console.log(lista);
  for (i = 0; i < 6; i++) {
    var nombre = document.createElement("div");
    nombre.id = nom[lista[i]-1];
    nombre.className = "NombreAnimal";
    nombre.draggable = true;
    nombre.addEventListener("dragstart", drag);
    var imgtex = document.createElement("img");
    imgtex.className = "NameAnimal";
    imgtex.src = "img/btn" + nom[lista[i] - 1] + ".jpg";
    nombre.appendChild(imgtex);
    Cajanom.appendChild(nombre);
  }
  for (j = 0; j < 3; j++) {
    var nuevoAnimal = document.createElement("div");
    var drag = document.createElement("div");
    drag.addEventListener("dragenter", eventoEnter, false);
    drag.addEventListener("dragover", eventoOver, false);
    drag.addEventListener("drop", soltado, false);
    drag.id = nom[lista2[j] - 1];
    drag.className = "caja";
    drag.ondrop = "drop(event)";
    drag.ondragover = "allowDrop(event)";
    var image = document.createElement("img");
    image.src = "img/" + nom[lista2[j] - 1] + ".png";
    image.className = "animal";
    nuevoAnimal.appendChild(drag);
    nuevoAnimal.appendChild(image);
    contenedor1.appendChild(nuevoAnimal);
  }
  for (j = 3; j < 6; j++) {
    var nuevoAnimal = document.createElement("div");
    var drag = document.createElement("div");
    drag.addEventListener("dragenter", eventoEnter, false);
    drag.addEventListener("dragover", eventoOver, false);
    drag.addEventListener("drop", soltado, false);
    drag.id = nom[lista2[j] - 1];
    drag.className = "caja";
    drag.ondrop = "drop(event)";
    drag.ondragover = "allowDrop(event)";
    var image = document.createElement("img");
    image.src = "img/" + nom[lista2[j] - 1] + ".png";
    image.className = "animal";
    nuevoAnimal.appendChild(drag);
    nuevoAnimal.appendChild(image);
    contenedor2.appendChild(nuevoAnimal);
  }
}
function soltado(e) {
  e.preventDefault();
  var id = e.dataTransfer.getData("Text");
  var elemento = document.getElementById(id);
  var posx = e.pageX - soltar.offsetLeft;
  var posy = e.pageY - soltar.offsetTop;.
  lienzo.drawImage(elemento, posx, posy);
}

function eventoEnter(e) {
  console.log("soy el evento dragenter");
  e.preventDefault();
}

function eventoOver(e) {
  console.log("soy el evento dragover");
  e.preventDefault();
}

window.onload = nombresMin();

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var animal = document.getElementById(data);
  var caja = event.target;
  if (caja.classList.contains("caja")) {
    caja.appendChild(animal);
    cajaAnimales[data] = caja;
  } else {
    contenedor.appendChild(animal);
    delete cajaAnimales[data];
  }
}

// Funci??n para crear un animal aleatorio y agregarlo al contenedor
// function crearAnimal() {
//   var animales = ["Gato", "Cerdo", "Llama", "Oveja", "Pollo", "Perro"];
//   let lista2 = [];
//   let repetido;
//   for (let i = 0; i < 6; i++) {
//     while (!lista[i]) {
//       repetido = true;
//       while (repetido == true) {
//         let random = Math.random();
//         random = random * 6 + 1;
//         random = Math.trunc(random);
//         for (let j = 0; j < lista.length; j++) {
//           if (lista[j] == random) {
//             repetido = true;
//             break;
//           } else {
//             repetido = false;
//           }
//         }
//         lista[i] = random;
//       }
//     }
//   }
//   console.log(lista);
//   for(i = 0; i <3; i++){
//     var nuevoAnimal = document.createElement("div");
//     nuevoAnimal.id = "animal"+i+1;
//     var drag = document.createElement("div");
//     drag.id = animales[lista2[i]-1];
//     drag.className = "caja";
//     drag.ondrop = "drop(event)";
//     drag.ondragover="allowDrop(event)";
//     var image = document.createElement("img");
//     image.src = animales[lista[i]-1] + ".png";
//     nuevoAnimal.appendChild(drag);
//     nuevoAnimal.appendChild(image);
//     contenedor1.appendChild(nuevoAnimal);
//   }

// var animal = animales[Math.floor(Math.random() * animales.length)];
// while (cajaAnimales[animal]) {
//   animal = animales[Math.floor(Math.random() * animales.length)];
// }
// var nuevoAnimal = document.createElement("div");
// nuevoAnimal.id = animal;
// nuevoAnimal.className = "animal";
// nuevoAnimal.draggable = true;
// nuevoAnimal.addEventListener("dragstart", drag );
// contenedor.appendChild(nuevoAnimal);
// cajaAnimales[animal] = null;
// }

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var animal = document.getElementById(data);
  var caja = event.target;
  if (caja.classList.contains("caja")) {
    caja.appendChild(animal);
    cajaAnimales[data] = caja;
  } else {
    contenedor.appendChild(animal);
    delete cajaAnimales[data];
  }
}

// Crear tres animales aleatorios al inicio del juego

// Funci??n para comprobar si se han colocado todos los animales en las cajas correctas
function comprobarGanador() {
  var CerdoCaja = cajaAnimales["Cerdo"];
  var GatoCaja = cajaAnimales["Gato"];
  var PolloCaja = cajaAnimales["Pollo"];
  var OvejaCaja = cajaAnimales["Oveja"];
  var LlamaCaja = cajaAnimales["Llama"];
  if (
    CerdoCaja &&
    CerdoCaja.id === "caja1" &&
    GatoCaja &&
    GatoCaja.id === "caja2" &&
    PolloCaja &&
    PolloCaja.id === "caja3" &&
    !OvejaCaja &&
    !LlamaCaja
  ) {
    alert("??Ganaste!");
  }
}