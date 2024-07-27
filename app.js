function asigTextElemen(elemento, texto, color) {
  let elementosHtml = document.querySelector(elemento);
  elementosHtml.innerHTML = texto;
  elementosHtml.style.color = color;
}

function mostrarElemento(elemento) {
  document.querySelector(elemento).style.visibility = "visible";
  document.querySelector(elemento).style.position = "static";
}

function ocultarElemento(elemento) {
  document.querySelector(elemento).style.visibility = "hidden";
  document.querySelector(elemento).style.position = "absolute";
}

function encriptarTexto() {
  let palabraIngresada = document.getElementById("text-ingresado").value;
  let condicion = /^[a-z\s]+$/; // Expresión regular permite minúsculas y espacios

  if (palabraIngresada === "") {
    asigTextElemen(".panel-mensaje", "¡Atención!", "#d90429");
    asigTextElemen(
      ".panel-parrafo",
      "verifique que su entrada no este vacia.",
      "#d90429"
    );
    return;
  }
  if (!condicion.test(palabraIngresada)) {
    asigTextElemen(".panel-mensaje", "¡Atención!", "#d90429");
    asigTextElemen(
      ".panel-parrafo",
      "La entrada debe contener solo minúsculas y espacios.",
      "#d90429"
    );
    return;
  }
  if (!/[aeiou]/.test(palabraIngresada)) {
    asigTextElemen(".panel-mensaje", "¡Atención!", "#d90429");
    asigTextElemen(
      ".panel-parrafo",
      "La entrada no es una palabra, debe contener al menos una vocal.",
      "#d90429"
    );
    return;
  }

  let palabraEncriptada = palabraIngresada
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("resultado").value = palabraEncriptada;

  // Ocultar el div panel-imagen y mostrar texto-resultado

  document.querySelector(".panel-imagen").style.display = "none";
  document.querySelector(".texto-resultado").style.display = "block";
}

function desencriptarTexto() {
  let palabraIngresada = document.getElementById("text-ingresado").value;
  let condicion = /^[a-z\s]+$/; // Expresión regular permite minúsculas y espacios

  if (palabraIngresada === "") {
    asigTextElemen(".panel-mensaje", "¡Atención!", "#d90429");
    asigTextElemen(
      ".panel-parrafo",
      "verifique que su entrada no este vacia.",
      "#d90429"
    );
    return;
  }

  if (!condicion.test(palabraIngresada)) {
    asigTextElemen(".panel-mensaje", "¡Atención!", "#d90429");
    asigTextElemen(
      ".panel-parrafo",
      "La entrada debe contener solo minúsculas y espacios.",
      "#d90429"
    );
    return;
  }

  let palabraDesencriptada = palabraIngresada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("resultado").value = palabraDesencriptada;

  document.querySelector(".panel-imagen").style.display = "none";
  document.querySelector(".texto-resultado").style.display = "block";
}

function copiarTexto() {
  let palabraCopiada = document.getElementById("resultado").value;
  navigator.clipboard
    .writeText(palabraCopiada)
    .then(() => {
      asigTextElemen(".panel-mensaje", "¡Atención!", "#d90429");
      asigTextElemen(".panel-parrafo", "Texto Copiado Con Exito", "#d90429");
    })
    .catch((err) => {
      console.error("Error al copiar texto:", err);
    });

  limpiar();
}

function limpiar() {
  document.querySelector("#text-ingresado").value = "";
  document.querySelector("#resultado").value = "";

  document.querySelector(".panel-imagen").style.display = "block";
  document.querySelector(".texto-resultado").style.display = "none";
}
