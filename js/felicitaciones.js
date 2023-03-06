//Creamos jugador artificial para probar guardado de datos
let jugador = JSON.parse(localStorage.getItem("player"));
let nombrePlayer = jugador.nickname;

//Ponemos su alias en la pagina
let nombre = document.getElementById("nombre");
nombre.innerHTML = "Has ganado " + nombrePlayer;

//Empezamos comprobando si existe un dato con el mismo nombre
if(localStorage.getItem(nombrePlayer) != undefined){
    let jugadorAux = JSON.parse(localStorage.getItem(nombrePlayer));
    if(jugador.tiempo < jugadorAux.tiempo){
        localStorage.setItem(nombrePlayer, JSON.stringify(jugador));
    }
}else{
    localStorage.setItem(nombrePlayer, JSON.stringify(jugador));
}
localStorage.removeItem("player");