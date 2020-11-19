function Vuelo() {
    this.codigo = "";
    this.hora_llegada = 0;
    this.hora_salida = 0;

    this.setCodigo = function(codigo) {
        this.codigo = codigo;
    }

    this.setHoraLLegada = function(hora_llegada) {
        this.hora_llegada = hora_llegada;
    }

    this.setHoraSalida = function(hora_salida) {
        this.hora_salida = hora_salida;
    }

    this.comprobarHora = function() {
        if(this.hora_salida < this.hora_llegada) {
            return alert("Hora correcta");
        } else {
            return alert("Hora incorrecta");
        }
    }
}

function Aeropuerto() {
    this.nombre = "";
    this.ciudad = "";
    this.vuelos = [];

    this.getVuelos = function() {
        return this.vuelos;
    }

    this.setNombre = function(nombre) {
        this.nombre = nombre;
    }

    this.setCiudad = function(ciudad) {
        this.ciudad = ciudad;
    }

    this.addVuelo = function(vuelo) {
        this.vuelos.push(vuelo);
    }

    this.vuelosDiarios = function() {
        return this.vuelos.length;
    }
}

let aeropuerto = new Aeropuerto();

for (let i = 0; i < 10; i++) {
    let vuelo = new Vuelo();
    let cod = "0" + i.toString();
    vuelo.setCodigo(cod);
    vuelo.setHoraSalida(11);
    vuelo.setHoraLLegada(12);
    aeropuerto.addVuelo(vuelo);
}

aeropuerto.getVuelos()[0].setHoraSalida(13);
aeropuerto.getVuelos()[0].comprobarHora();

aeropuerto.getVuelos()[0].setHoraLLegada(14);
aeropuerto.getVuelos()[0].comprobarHora();