//Creamos jugador artificial para probar guardado de datos
let jugador = {"alias":"Pedrito", "tiempo":150};

//Ponemos su alias en la pagina
let nombre = document.getElementById("nombre");
nombre.innerHTML = "Has ganado " + jugador.alias;

//Empezamos comprobando si existe un dato con el mismo nombre
if(localStorage.getItem(jugador.alias) != undefined){
    let jugadorAux = JSON.parse(localStorage.getItem(jugador.alias));
    if(jugador.tiempo < jugadorAux.tiempo){
        localStorage.removeItem(jugador.alias);
        localStorage.setItem(jugador.alias, JSON.stringify(jugador));
    }
}else{
    localStorage.setItem(jugador.alias, JSON.stringify(jugador));
}