/*
Rocío del Real 
U3T5 - Window
Crea un programa que tenga botones para permitir modificar las siguientes propiedades de una  ventana:
Abrir una ventana nueva:
Debes preguntar al usuario si está de acuerdo o no, y solo si acepta se abrirá la nueva ventana.
La nueva ventana tendrá las siguientes propiedades: no tendrá barrade herramientas, ni location, ni barra de  menú, 
ni será redimensionable. Tendrá 200x80 píxeles y se posicionará en 500x500 píxeles.
La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará la ventana.
Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error.
Mover la ventana 10 píxeles a la derecha y abajo.
Mover la ventana a la posición 100,100.
Aumentar el tamaño de la ventana 10 píxeles de ancho y largo.
Aumentar el tamaño de la ventana a 400x200.
Colocar el scroll de la ventana arriba del todo
Colocar el scroll de la ventana a 10 píxeles de la parte superior.
Todos los botones, exceptoel primero y el segundo, los puedes programar diréctamente mediante la  propiedad onClick, por ejemplo:<input type=“button” value=“Imprimir” onClick=“print()”/>
Recuerda que no es necesario utilizar “window” delante de la propiedad
*/

let ventana;

let option=confirm("¿Deseas que abra una ventana nueva?");

if(option){
    ventana=open(
        "",
        "",
        "width=200,height=100,top=500,left=500,menubar=no,resizable=no,status=no,location=no"
    );

    ventana.document.write(
        '<p>La ventana de Rocío</p><br><button type="button" onclick="window.close()">Cerrar ventana</button>'
    );

}
//con close() solo en lugar de window.close() también funciona
function mover_10px(){
    console.log("mover_10px");
    ventana.moveTo(ventana.screenX+10, ventana.screenY+10);
}

function mover_100x100(){
    console.log("mover_100x100");
    ventana.moveTo(100,100);
}

function aumentar_10px(){
    console.log("aumentar_10px");
    ventana.resizeTo(10,10);
}

function aumentar_400x200(){
    console.log("aumentar_400x200");
    ventana.resizeTo(400,200);
}

function scroll_arriba(){
    console.log("scroll_arriba");
    ventana.scrollTo(ventana.pageXOffset,0);
}

function scroll_a_10px(){
    console.log("scroll_a_10px");
    ventana.scrollTo(ventana.pageXOffset,10);
}

function cerrar_ventana(){
    if(!ventana.closed){
        ventana.close();
    }else{
        document.getElementById("mensajes").innerHTML = "¡La ventana estaba cerrada!";
    }
}

