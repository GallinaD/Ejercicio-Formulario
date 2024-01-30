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

/**
 * Mod23: Retorna si una letra corresponde al algoritmo
 * @param {Int} num: numero entero 8 digitos
 * @param {char} letra: input a comparar con mod23
 * @return {boolean} true si letra corresponde si no false
 */
function mod23(num, letra){
    let correcta_letra;
    switch(num%23){
        case 0:
            correcta_letra = "T";
            break;
        case 1:
            correcta_letra = "R";
            break;
        case 2:
            correcta_letra = "W";
            break;
        case 3:
            correcta_letra = "A";
            break;
        case 4:
            correcta_letra = "G";
            break;
        case 5:
            correcta_letra = "M";
            break;
        case 6:
            correcta_letra = "Y";
            break;
        case 7:
            correcta_letra = "F";
            break;
        case 8:
            correcta_letra = "P";
            break;
        case 9:
            correcta_letra = "D";
            break;
        case 10:
            correcta_letra = "X";
            break;
        case 11:
            correcta_letra = "B";
            break;
        case 12:
            correcta_letra = "N";
            break;
        case 13:
            correcta_letra = "J";
            break;
        case 14:
            correcta_letra = "Z";
            break;
        case 15:
            correcta_letra = "S";
            break;
        case 16:
            correcta_letra = "Q";
            break;
        case 17:
            correcta_letra = "V";
            break;
        case 18:
            correcta_letra = "H";
            break;
        case 19:
            correcta_letra = "L";
            break;
        case 20:
            correcta_letra = "C";
            break;
        case 21:
            correcta_letra = "K";
            break;
        case 22:
            correcta_letra = "E";
            break;
        default:
            correcta_letra = undefined;
    }

    return letra == correcta_letra;
}

/**
 * Validar DNI:
 * revisar que sean 8 numeros (entre 48 y 57 ASCII) y letra al final (9 caracteres)
 * la letra tiene que seguir el algoritmo de module 23
 * @param {string} DNI: numero mas letra
 * @return {boolean} true si es valido, false si no
 */
function val_DNI(DNI){
    var numero = DNI.slice(0,8);
    var letra = DNI.slice(8,9);

    var con0 = true;
    for (let i = 0; i < numero.length; i++) {
        con0 = con0 && numero.charCodeAt(i) >= 48 && numero.charCodeAt(i) <= 57;
    }

    var con1 = DNI.length == 9;
    var con2 = numero.length == 8;
    var conmod23 = mod23(parseInt(numero), letra);

    return con0 && con1 && con2 && conmod23;
}