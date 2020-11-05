/*
Ejercicio 3

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
class Aeropuerto{
    constructor(nombre, ciudad, numVuelosDiarios) {
        this.nombre = nombre;
        this.ciudad = ciudad;

        this.numVuelosDiarios=numVuelosDiarios;
      }

}

class Vuelo {
    constructor(codigo, hora_llegada,hora_salida) {
      this.codigo = codigo;
      this.hora_llegada = hora_llegada;
      this.hora_salida=hora_salida;


      //creo los metodos
      this.setHora_llegada=function(hora_llegada){
        this.hora_llegada=hora_llegada;
      }

      this.setHora_Salida=function(hora_salida){
        this.hora_salida=hora_salida;
      }
      /**Comprueba si la hora de salida es posterior a la hora de llegada */
      this.checkHoras=function(hora_salida,hora_llegada){
        if(hora_salida>hora_llegada){
            alert("La hora de salida es posterior");
        }else{
            alert("La hora de salida NO es posterior");
        }
      }

    }

    
  }
/**Cada vuelo diario se representará como un objeto de la clase Vuelo */
let vueloDiario1=new Vuelo("1Cod",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario2=new Vuelo("2Cod",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario3=new Vuelo("3Cod",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario4=new Vuelo("4Cod",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario5=new Vuelo("5Cod",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario6=new Vuelo("6Cod34",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario7=new Vuelo("7Cod-",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario8=new Vuelo("8Codv",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario9=new Vuelo("9Codxxx",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));
let vueloDiario10=new Vuelo("ZCod",new Date("December 17, 2020 12:00:00"),new Date("December 17, 2020 11:00:00"));

/**Cambio la hora de salida del primer vuelo a las 13 */
function showElements(array){
    cadena=JSON.stringify(array);
    //console.log(cadena);
    alert("Mostrando elementos:\n"+cadena);
}
//compruebo todos los elementos del vuelo 1
showElements(vueloDiario1);
//modifico la hora de salida de 12 a las 13
vueloDiario1.sethora_salida(new Date("December 17, 2020 13:00:00"));
//compruebo el cambio
showElements(vueloDiario1);
