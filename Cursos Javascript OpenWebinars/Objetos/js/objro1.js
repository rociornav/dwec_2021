//defino la clase Bandeja
function Bandeja() {
    // Atributos
    this.tipoPastel = "";
    this.variedadPastel = "";
    this.cant = "";
    this.horaElaboracion = "";
    this.horaVentaLast = "";

    //Constructor:

    this.constructor = function (tipoPastel,variedadPastel,cant,horaElaboracion) {
        this.tipoPastel = tipoPastel;
        this.variedadPastel = variedadPastel;
        this.cant = cant;
        this.horaElaboracion = horaElaboracion;
    }

    //metodos
    /**
     * devuelve la diferencia en horas, minutos y segundos en formato HH:MM:SS entre que salió la bandeja y 
     * que se vendió el último pastel.
     */
    this.tiempo_venta = function (horaElaboracion,horaVentaLast) {
        //var diferencia = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"); muestra en formato hh:mm:ss
       
        /*
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}*/
        
        
        // var res = ((horaElaboracion-horaVentaLast)/1000);//entre 1000 pues se da en milisegundos
        // console.log(res) 
        var hora1 = (horaElaboracion).split(":"),
            hora2 = (horaVentaLast).split(":"),
            t1 = new Date(),
            t2 = new Date();
 
        t1.setHours(hora1[0], hora1[1], hora1[2]);
        t2.setHours(hora2[0], hora2[1], hora2[2]);
        
        //Aquí hago la resta
        t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
        
        //Imprimo el resultado
        document.getElementById("diferencia").innerHTML  = "La diferencia es de: " + (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas" : " hora") : "") + (t1.getMinutes() ? ", " + t1.getMinutes() + (t1.getMinutes() > 1 ? " minutos" : " minuto") : "") + (t1.getSeconds() ? (t1.getHours() || t1.getMinutes() ? " y " : "") + t1.getSeconds() + (t1.getSeconds() > 1 ? " segundos" : " segundo") : "");
        //document.getElementById("diferencia").innerHTML  =t1.getHours+":"+t1.getMinutes+":"+t1.getSeconds;
    };

}

let bandeja1 = new Bandeja(); //creamos un objeto llamado bandeja1.
bandeja1.constructor("tipo1","variedad1","9","11:00:00","12:00:00");
bandeja1.tiempo_venta("03:29:01","03:28:56")