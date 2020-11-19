/*
Ejercicio 3 //usar la terminal

Diseña una clase Aeropuerto. Tendrá como atributos nombre, ciudad y numero de vuelos diarios.

Cada vuelo diario se representará como un objeto de la clase Vuelo. En ella se guardarán los atributos “codigo”, “hora_llegada” y 
“hora_salida”.

Implementa métodos en aeropuerto y vuelo para modificar la hora de llegada, para modificar la hora de salida y para comprobar si la
 hora de salida es posterior a la hora de llegada.

Comprueba todos los métodos, creando un aeropuerto con 10 vuelos activos, todos saliendo a las 11 y llegando a las 12.
 Cambia la salida del primer vuelo a las 13 y comprueba las horas de salida y llegada. Cambia la de llegada a las 14 y vuelve a 
 comprobar las horas.
*/

//CREO EL OBJETO DISCO
// Definimos la clase aeropuerto
function Aeropuerto(nombre, ciudad, n_vuelos) {
  // Atributos clase aeropuerto
  this.nombre = nombre;
  this.ciudad = ciudad;
  this.vuelos = [];

  // cambia hora llegada
  this.cambiar_hora_llegada = function cambiar_hora_llegada(n, nueva_hora) {
    this.vuelos[n].cambiar_hora_llegada(nueva_hora);
  };

  // cambia hora salida
  this.cambiar_hora_salida = function cambiar_hora_salida(n, nueva_hora) {
    this.vuelos[n].cambiar_hora_salida(nueva_hora);
  };

  // Comprueba si llegada posterior a salida
  this.comp_llegada_mayor_salida = function comp_llegada_mayor_salida(n) {
    console.log(this.vuelos[n].comprueba_llegada_mayor_salida());
  };

  // Inicializamos vuelos: todos salen a las 11 y llegan a las 12
  for (i = 0; i < n_vuelos; i++) {
    this.vuelos[i] = new Vuelo(i, "11:00", "12:00");
  }
}

// Definimos la clase vuelo
// Formato horas HH:MM
function Vuelo(codigo, hora_salida, hora_llegada) {
  // Atributos del vuelo
  this.codigo = codigo;
  this.hora_salida = hora_salida;
  this.hora_llegada = hora_llegada;

  // cambia hora llegada
  this.cambiar_hora_llegada = function (nueva_hora) {
    this.hora_llegada = nueva_hora;
  };

  // cambia hora salida
  this.cambiar_hora_salida = function cambiar_hora_salida(nueva_hora) {
    this.hora_salida = nueva_hora;
  };

  // Comprueba si llegada posterior a salida
  this.comprueba_llegada_mayor_salida = function comprueba_llegada_mayor_salida() {
    let lleg = this.hora_llegada.split(":");
    let sal = this.hora_salida.split(":");

    let hhlleg = parseInt(lleg[0]);
    let mmlleg = parseInt(lleg[1]);

    let hhsal = parseInt(sal[0]);
    let mmsal = parseInt(sal[1]);

    if (hhlleg > hhsal) {
      return true;
    } else if (hhlleg < hhsal) {
      return false;
    } else {
      if (mmlleg > mmsal) {
        return true;
      } else {
        return false;
      }
    }
  };
}

let miAeropuerto = new Aeropuerto("Velazquez", "Sevilla", 10);
//comprobamos con true que la hora de llegada es mayor a la de salida.
miAeropuerto.comp_llegada_mayor_salida(1);
//cambiamos la hora de saldida del vuelo 1 a las 13.00
miAeropuerto.cambiar_hora_salida(1, "13:00");
//probamos que se hace el cambio, debe dar false pues hora salida inicial= 11 hora llegada inicial=12, hora salida actual=13.
miAeropuerto.comp_llegada_mayor_salida(1);

//modificamos la hora de llegada a las 14.00
miAeropuerto.cambiar_hora_llegada(1, "14:00");
//debe dar true pues la hora de salida es mayor
miAeropuerto.comp_llegada_mayor_salida(1);

/**Cada vuelo diario se representará como un objeto de la clase Vuelo */
/*let vueloDiario1 = new Vuelo(
  "1Cod",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario2 = new Vuelo(
  "2Cod",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario3 = new Vuelo(
  "3Cod",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario4 = new Vuelo(
  "4Cod",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario5 = new Vuelo(
  "5Cod",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario6 = new Vuelo(
  "6Cod34",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario7 = new Vuelo(
  "7Cod-",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario8 = new Vuelo(
  "8Codv",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario9 = new Vuelo(
  "9Codxxx",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);
let vueloDiario10 = new Vuelo(
  "ZCod",
  new Date("December 17, 2020 12:00:00"),
  new Date("December 17, 2020 11:00:00")
);*/

/**Cambio la hora de salida del primer vuelo a las 13 */
/*function showElements(array) {
  cadena = JSON.stringify(array);
  //console.log(cadena);
  alert("Mostrando elementos:\n" + cadena);
}
//compruebo todos los elementos del vuelo 1
showElements(vueloDiario1);
//modifico la hora de salida de 12 a las 13
vueloDiario1.sethora_salida(new Date("December 17, 2020 13:00:00"));
//compruebo el cambio
showElements(vueloDiario1);*/
