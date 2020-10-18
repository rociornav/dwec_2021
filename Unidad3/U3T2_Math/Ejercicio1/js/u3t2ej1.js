//Rocío del Real Navarro 16/10/20 U3 Tarea 2 Ejercicio 1.

/*
Crea un programa que pida al usuario que elija una opción del siguiente menú:

Potencia.
Raíz.
Redondeo.
Trigonometría.

Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el
resultado en pantalla (La potencia de X elevado a Y es: )

Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en
pantalla (La raíz de X es: )

Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al
entero más próximo, al alta y a la baja.

Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla
los valores trigonométricos del seno, coseno y tangente.
*/

let opcion = prompt("Elige una opción: \n 1. Potencia\n 2. Raíz\n 3. Redondeo\n 4. Trigonometría");

switch(opcion) {
    case "1":
        let base = prompt("Dame la base: ");
        let exponente = prompt("Dame el exponente: ");
        alert("Solución = " + Math.pow(base, exponente));
        break;

    case "2":
        let numero = prompt("Dame un número (no negativo): ");
        if (numero > 0) {//si es positivo muestra el rdo
            alert("La raíz de "+numero+" es "+Math.sqrt(numero));
        } else {
            alert("Error, ¡debe poner un numero positivo!");
        }
        break;

    case "3":
        let numero2 = prompt("Escribe un número decimal (separador es '.' no ','): ");
        document.write("Redondeo al entero más próximo: "+Math.round(numero2)); 
        document.write("<br>Redondeo al alta: " + Math.ceil(numero2));
        document.write("<br>Redondeo a la baja: " + Math.floor(numero2));
        break;

    case "4":
        let angulo = prompt("Pon un ángulo (entre 0 y 360): ");
        document.write("Valores trigonométricos: <br><br>  Seno: " + Math.sin(angulo));
        document.write("<br>  Coseno: " + Math.cos(angulo));
        document.write("<br>  Tangente: " + Math.tan(angulo));
        break;

    default:
        alert("Error. No existe esa opción.")
        break;
}