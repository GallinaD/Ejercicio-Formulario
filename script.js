/**
 * Validación de nombres:
 * Que los apellidos esten separados y que solo contengan letras (ASCII A-Z [65 - 90], a-z [97 - 122], Ñ [209], ñ [241], space [32])
 * @param {string} nombre: nombre del usuario
 * @return {boolean} true si es valido o false si usa caracteres no permitidos
 */
function val_nombre(nombre){
    for (let i = 0; i < nombre.length; i++) {
        var char = nombre.charCodeAt(i);

        let con1 = char >= 65 && char <= 90;
        let con2 = char >= 97 && char <= 122;
        let con3 = char == 209 || char == 241 || char == 32;
        
        if(!(con1 || con2 || con3))
            return false;
    }
    
    return true;
}