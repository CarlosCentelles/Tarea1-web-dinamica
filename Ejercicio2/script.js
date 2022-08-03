document.getElementById("botonFila").addEventListener("click", addFila);

function addFila(){
    
    const crearTr = document.createElement("tr");//Creamos una fila
        
    for(let celda = 1;celda<=4;celda++){
        const crearTd = document.createElement("td");//Creamos una columa
        document.getElementById("tabla").appendChild(crearTr).appendChild(crearTd);//Agreagamos las columnas a la fila
        crearTd.innerText = "Celda" + celda;
    }    
}