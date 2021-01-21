/*U5 T3 Rocío del Real
Crea de manera dinámica (es decir, al cargarse la página) el formulario que definimos en el tema anterior
 (tarea U4T1).
Ten en cuenta que el formulario deberá tener los atributos necesarios para que, al crearse, 
tenga la misma funcionalidad que el que creaste en html.
No olvides añadir las etiquetas <label> a cada uno de los elementos.


Lo que tengo que crear:


<form>
        <label for="nombre">Nombre del disco:</label>
        <input type="text" name="nombre"><br>
        <label for="artista">Grupo/artista:</label>
        <input type="text" name="artista"><br>
        <label for="anyo">Año de publicacion:</label>
        <input type="date" name="anyo"></input><br>
        <label for="tipo">Tipo de musica:</label>
        <select name="tipo">
            <option value="rock" selected>Rock</option>
            <option value="pop">Pop</option>
            <option value="punk">Punk</option>
            <option value="indie">Indie</option>
        </select><br>
        <label for="localizacion">Localizacion:</label>
        <input type="number" name="localizacion"><br>
        <label for="prestado">Prestado:</label>
        <input type="checkbox" name="prestado"><br>
        <button type="submit">Enviar</button>
    </form>
    https://stackoverflow.com/questions/7608266/how-to-create-label-and-check-box-dynamically-in-javascript
*/

//Mis pasos
//1) Creamos la etiqueta 'form'
/* otra forma:
var x = document.createElement("FORM");
  x.setAttribute("id", "myForm");
  document.body.appendChild(x);
*/
const elementForm = document.createElement("form");
//le ponemos al form de id='formUno': https://stackoverflow.com/questions/19625646/javascript-adding-an-id-attribute-to-another-created-element
elementForm.id = "formUno";
//Lo situamos dentro del body. (???)-->Nota, intuyo que por defecto lo pone al final del body. PREGUNTAR
document.body.appendChild(elementForm);
//2). Primer label
const label_nombre = document.createElement("Label"); //es necesario ponerle id a cada label?
label_nombre.setAttribute("for", "nombre");
label_nombre.innerHTML = "Nombre del disco:";

//lo colocamos dentro del form-->parentDiv.appendChild(label_nombre);
document.body.children[0].appendChild(label_nombre); //= elementForm.appendChild(label_nombre)


/*
var newlabel = document.createElement("Label");
newlabel.setAttribute("for",id_from_input);
newlabel.innerHTML = "Here goes the text";
parentDiv.appendChild(newlabel);*/


//3). Primer input

const elemInput1 = document.createElement("input");
elemInput1.setAttribute("type", "text");
elemInput1.setAttribute("name", "nombre");
//elemImput1.for="nombre";asi no va
document.getElementById("formUno").appendChild(elemInput1);

elementForm.appendChild(document.createElement("br")); //asi creamos un intro en html 

/*
4). Hacer ahora esta parte del codigo:
<label for="artista">Grupo/artista:</label>
<input type="text" name="artista"><br>
*/

const label_artista = document.createElement("Label");
label_artista.setAttribute("for", "artista");
label_artista.innerHTML = "Grupo/artista:";

//lo colocamos dentro del form-->parentDiv.appendChild(label_artista);
elementForm.appendChild(label_artista);

const elemInput2 = document.createElement("input");
elemInput2.setAttribute("type", "text");
elemInput2.setAttribute("name", "artista");
document.getElementById("formUno").appendChild(elemInput2);

elementForm.appendChild(document.createElement("br"));

/*
5). Año publicacion

<label for="anyo">Año de publicacion:</label>
<input type="date"></input><br>
*/
const label_public = document.createElement("Label");
label_public.setAttribute("for", "anyo");
label_public.innerHTML = "Año de publicacion:";

//lo colocamos dentro del form-->parentDiv.appendChild(label_public);
elementForm.appendChild(label_public);


const elemInput3 = document.createElement("input");
elemInput3.setAttribute("type", "date");
document.getElementById("formUno").appendChild(elemInput3);

elementForm.appendChild(document.createElement("br"));

/*
6). Tipo musica


<label for="tipo">Tipo de musica:</label>
        <select name="tipo">
            <option value="rock" selected>Rock</option>
            <option value="pop">Pop</option>
            <option value="punk">Punk</option>
            <option value="indie">Indie</option>
        </select><br>
*/
const label_music = document.createElement("Label");
label_music.setAttribute("for", "tipo");
label_music.innerHTML = "Tipo de musica:";

//lo colocamos dentro del form-->parentDiv.appendChild(label_music);
elementForm.appendChild(label_music);

//Creamos el select
const elemSelect = document.createElement("select");
elemSelect.setAttribute("name", "tipo");
document.getElementById("formUno").appendChild(elemSelect);//lo colocamos al final del form
elementForm.appendChild(document.createElement("br"));//ponemos br
//Insertar dentro del select las options
//Creamos las 4 options con sus atributos y su texto
const elemOption1 = document.createElement("option");
elemOption1.setAttribute("value", "rock");
// elemOption1.setAttribute("selected"); asi nooo
elemOption1.setAttribute("selected",true);
// elemOption1.focus(); no es valido tmpoco
elemOption1.innerHTML = "Rock";

const elemOption2 = document.createElement("option");
elemOption2.setAttribute("value", "pop");
// elemOption2.setAttribute("selected",true);
elemOption2.innerHTML = "Pop";

const elemOption3 = document.createElement("option");
elemOption3.setAttribute("value", "punk");
elemOption3.innerHTML = "Punk";

const elemOption4 = document.createElement("option");
elemOption4.setAttribute("value", "indie");
elemOption4.innerHTML = "Indie";

//colocamos las options dentro del padre 'select'
document.getElementById("formUno").children[10].appendChild(elemOption1);
document.getElementById("formUno").children[10].appendChild(elemOption2);
document.getElementById("formUno").children[10].appendChild(elemOption3);
document.getElementById("formUno").children[10].appendChild(elemOption4);

/*
7). Localizacion

<label for="localizacion">Localizacion:</label>
<input type="number" name="localizacion"><br>
*/
const label_localiz = document.createElement("Label");
label_localiz.setAttribute("for", "localizacion");
label_localiz.innerHTML = "Localizacion:";

//lo colocamos dentro del form-->parentDiv.appendChild(label_localiz);
elementForm.appendChild(label_localiz);


const inputLoc = document.createElement("input");
inputLoc.setAttribute("type", "number");
inputLoc.setAttribute("name", "localizacion");
document.getElementById("formUno").appendChild(inputLoc);

elementForm.appendChild(document.createElement("br"));

/*
8). <label for="prestado">Prestado:</label>
        <input type="checkbox" name="prestado"><br>
*/
const label_prest = document.createElement("Label");
label_prest.setAttribute("for", "prestado");
label_prest.innerHTML = "Prestado:";

//lo colocamos dentro del form-->parentDiv.appendChild(label_prest);
elementForm.appendChild(label_prest);

const inputPrest = document.createElement("input");
inputPrest.setAttribute("type", "checkbox");
inputPrest.setAttribute("name", "prestado");
document.getElementById("formUno").appendChild(inputPrest);

elementForm.appendChild(document.createElement("br"));

/*
9). Button submit
<button type="submit">Enviar</button>
*/
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.innerHTML = "Enviar";
//lo colocamos dentro del form-->parentDiv.appendChild(submitButton);
elementForm.appendChild(submitButton);