var segundoshtml = document.getElementById("segundos");
var segundos = 0;

window.onload = function(){
    let control = setInterval(cronometro,1000);
};

function cronometro() {
    segundos++;
    segundoshtml.innerHTML = segundos;
}