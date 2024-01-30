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

