//Rocío del Real Navarro 16/10/20 U3 Tarea 1 Ejercicio 2.

/*
Enunciado:

Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer 
en domingo desde este año hasta el año 2100.

Recuerda que los meses empiezan desde el número 0.
*/


function cantDomingos() {
    let res = new Date(document.getElementById("party").value); //recoge el valor del calendario
    let cantSundays = 0; //cuenta los domingos que cae el dia del cumple del usuario

    let day = res.getDate(); //día del mes
    let month = res.getMonth(); //mes
    let yearActual = res.getFullYear(); //año actual

    
    for(let i = yearActual; i <= "2100"; i++) { 
        let fechasCumpleVenideras = new Date(i, month, day);
        if(fechasCumpleVenideras.getDay() === 0) {
            cantSundays++;
        }
    }
    return alert("Solución: "+cantSundays+" domingos hasta el año 2100");
  }
