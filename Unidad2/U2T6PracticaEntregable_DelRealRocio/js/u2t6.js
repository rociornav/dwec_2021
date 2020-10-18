/*
09/10/20 Rocío del Real

U2T6 - Ejemplo de práctica entregable
Haz una página web que implemente un juego de encontrar un número aleatorio bajo las premisas que se explican a continuación:

La página calculará un número del 1 al 100.
Luego preguntará al usuario por el número mediante un prompt.
Si el usuario escribe algo que no es un número se indica el error y se vuelve a pedir el número.
Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego.
Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.
Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
Al final, si se ha finalizado correctamente el juego se indica el número de intentos.
Se permite volver a jugar al usuario mediante un cuadro de confirmación

    NOTA: MI COMPLEJIDAD EN ESTE CODIGO FUE ESTA FUNCION isNaN()
     función isNaN() determina cuando el valor es NaN o no: 
     https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/isNaN
    
*/

//Paso 1. Defino variables
var numeroAleatorio, numeroUsuario;

//Paso 2. Genero numero aleatorio de 1 a 100
numeroAleatorio = parseInt(Math.random()*(100))+1; //*(max-min)+min

            /*Ejemplo de 98 a 100: 
            var num=parseInt(Math.random()*(101-98))+98; 
            */

alert("Finge que no lo ves: Numero aleatorio de 1 a 100 => "+numeroAleatorio); //para probar el programa me sirve saber el numero aleatorio

//Paso 3. Preguntar al usuario por el numero con prompt
numUsuario=prompt("Introduce un número del 1 a 100: ");
    

    do{
        if(isNaN(numUsuario)||numUsuario!=numeroAleatorio){ //importante poner esto, sino no va
            if(isNaN(numUsuario)){
                //Indicar el error si introduce algo distinto a un int.
                numUsuario=prompt("Error: eso no es un numero. Vuelve a introducir un número del 1 a 100: ");
            }else{ //es igual que else if(numUsuario!=numeroAleatorio)|Volver a pedir el numero si no coincide con el aleatorio y dar pistas.
                if(numUsuario<numeroAleatorio){
                    numUsuario=prompt("Su numero es **MENOR** al aleatorio. Prueba poniendo uno mayor.");
                }else{
                    numUsuario=prompt("Su numero es **MAYOR** al aleatorio. Prueba ponienda uno menor.");
                }
            }
        }
       
    }while(isNaN(numUsuario)||numUsuario!=numeroAleatorio);

    //Si el usuario acierta sale del bucle y se muestra el mensaje
    if(numUsuario==numeroAleatorio){ //igualdad estricta=== no sirve, igualdad débil sí
        alert("FELICIDADES! Su número "+numUsuario+" coincide con el aleatorio "+numeroAleatorio);
    }



