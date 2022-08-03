document.getElementById("imagenMostrada").addEventListener("click", cambiarIMG);

function cambiarIMG(){
    let imagenAleatoria = "imagen" + Math.floor((Math.random()*4) + 1) + ".jpg"; //Creamos la ruta de la imagen de forma aleatoria
    document.getElementById("imagenMostrada").setAttribute("src", imagenAleatoria); //Le pasamos la ruta aleatoria al DOM
}