/*
U4T2 - Formularios y eventos    Rocio del Real

Vas a crear un juego (el memory) que consiste en encontrar parejas en 12 cartas con 6 parejas
  de los personajes de los Simpson.
El juego consistirá en lo siguiente:
La aplicación deberá tener una tabla con 3 filas y cuatro columnas de un color (rojo)
//se referira al fondo de la tabla creo//.  
Además habrá un cuadro de texto con el valor 0 pero no modificable.
Cuando el usuario haga clic sobre una celda, se mostrará una imagen.
Cuando el usuario haga clic sobre otra celda, se mostrará otra imagen.
Si las dos imágenes son iguales, se dejará de mostrar la imagen, se cambiará el color de las celdas a verde y se añadirá 1  al cuadro de texto.
Si las dos imágenes son diferentes, se ocultarán mostrando nuevamente el  color inicial.
En primer lugar, crea un esquema en una hoja con el arbol DOM del documento  html y en otra indica los métodos que vas
a crear asociados a qué evento.
Trata de utilizar el menor número de variables posibles: utiliza las propiedades de  los elementos para cambiar su
comportamiento.
Las imágenes son demasiado grandes, así que o bien la redimensionas o bien las muestras redimensionadas.
Deberás utilizar un código .css para los colores (y tamaño si así lo quieres) que puedes incustrar el mismo html o poner en un fichero aparte.
Puedes utilizar la siguiente función para permitir un "delay" (tiempo de espera) entre que se muestran las imágenes y se ocultan:
setTimeout(() => {
          // Código a ejecutar después de que pase...
        }, 1000); // ... el número de milisegundos que aquí se especifique, en este caso, 1 segundo.

*/

const personajes = {1001: "homer",1002: "marge",1003: "lisa",1004: "bart",1005: "maggie",1006: "flanders"};

let grid=[[],[],[]];//3 filas


function startGame(){
  //creo el grid de 3 filas 4 columnas
   //Paso 1. rellenamos las posiciones con las que haya en personajes
  let posiciones=Object.keys(personajes);
  Array.prototype.push.apply(posiciones, posiciones);//ahora tenemos los personajes repetidos
 
  // otra forma:
  //for(let i=0; i<personajes.length;i++){
  //   posiciones[i]=Object.keys(personajes)[i]; //posiciones[i]=i;
  // }
  let plainGrid=posiciones.sort(function(a, b){return 0.5 - Math.random()});


 /* let plainGrid = []
for (let posicion in posiciones) {
  const gpp = Math.floor((Math.random() * posiciones.length) + 1)-1;
  plainGrid[gpp] = plainGrid[gpp] == null && plainGrid.filter(x => x===posicion).length <=2 ? posicion : plainGrid[gpp];
}*/

//console.log(plainGrid);


//Paso 2. rellenar con id de personajes
let pos=0;
for(let i=0;i<3;i++){
  for(let j=0;j<4;j++){
    grid[i][j]=plainGrid[pos];
    pos++;
  }
}
//console.log(grid);
print();
}

function print(){
  for(let i=0;i<3;i++){
    let tr=document.createElement("tr");
    for(let j=0;j<4;j++){
      let td=document.createElement("td");
      const per=[grid[i][j],personajes[grid[i][j]]];//[id,personaje]
      td.innerHTML='<img id="img'+per[0]+'" src="img/'+per[1]+'.png" onclick="cardClick('+per[0]+')"><input type="text" value="0" disabled>'
      td.onclick=()=>cardClick(per[0]);
      tr.appendChild(td);
    }
    document.getElementById("memoryGame").appendChild(tr);
  }
}

function cardClick(id){
  console.log(id);
  document.getElementById("img"+id).style.visibility="visible";
  
}
