function generaForm() {

    var formulario = document.createElement("form");

    formulario.setAttribute('style', "width:300px;margin: 0px auto");

    create("Nombre", formulario);
    create("Apellidos", formulario);
    create("Dni", formulario);
    create("Email", formulario);

    var inputBoton = document.createElement("input");
    inputBoton.setAttribute("type", "submit");
    inputBoton.setAttribute("style", "margin: auto; padding: 5px;");
    formulario.appendChild(inputBoton);


    document.body.appendChild(formulario);
}

function create (nombre, formulario) {
    var elemento = document.createElement("label");
    elemento.innerHTML = nombre;

    var inputElemento = document.createElement("input");
    inputElemento.setAttribute("type", "text");
    inputElemento.setAttribute("id", nombre + "Input");
    inputElemento.setAttribute("placeholder", nombre);
    inputElemento.setAttribute("required", "true");
    inputElemento.setAttribute("style", "width:100%;margin: 10px 0px;padding: 5px");

    formulario.appendChild(elemento);

    formulario.appendChild(inputElemento);
    var myBr = document.createElement("br");
    formulario.appendChild(myBr);
}

generaForm()
/**
 * Validación de nombres:
 * Que los apellidos esten separados y que solo contengan letras (ASCII A-Z [65 - 90], a-z [97 - 122], Ñ [209], ñ [241], space [32])
 * @param {string} nombre: nombre del usuario
 * @return {boolean} true si es valido o false si usa caracteres no permitidos
 */
function val_nombre(nombre) {
  for (let i = 0; i < nombre.length; i++) {
    var char = nombre.charCodeAt(i);

    let con1 = char >= 65 && char <= 90;
    let con2 = char >= 97 && char <= 122;
    let con3 = char == 209 || char == 241 || char == 32;

    if (!(con1 || con2 || con3)) return false;
  }

  return true;
}

/* validar email:
que contenga @ y que no sea el primero: 64
que contenga sólo un  . y que sea después de @, 
que no haya espacios
numero de caracteres

*/

function contieneArroba(email) {
  var arroba = email.charCodeAt(0) != 64;

  var espacio = !email.includes(" ");

  var parts = email.split("@");
  var punto = email[email.length - 1] != "." && email[0] != "." && parts[1][0] != ".";

  if (parts.length == 2 && parts[1].includes(".") && arroba && punto && espacio) {
    return true;
  }

  return false;
}


