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


