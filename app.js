// Función para asignar texto y color a un elemento HTML
function asigTextElemen(elemento, texto, color, fondo) {
  let elementosHtml = document.querySelector(elemento);
  elementosHtml.innerHTML = texto;
  elementosHtml.style.color = color;
  elementosHtml.style.backgroundColor = fondo;
}

// Función para mostrar mensajes en el panel de mensajes
// Función para mostrar mensajefondoel panel de mensajes
function mostrarMensaje(mensaje, detalle, color, fondo) {
  asigTextElemen(".panel-mensaje", mensaje, color, fondo);
  asigTextElemen(".panel-parrafo", detalle, color, fondo);
}

// Función para validar la entrada del usuario
function validarEntrada(texto) {
  if (texto === "") {
    mostrarMensaje(
      "¡Atención!",
      "Verifique que su entrada no esté vacía.",
      "#990000",
      "#ad9bb7"
    );
    return false;
  }
  if (!/^[a-z\s]+$/.test(texto)) {
    mostrarMensaje(
      "¡Atención!",
      "La entrada debe contener solo minúsculas y espacios.",
      "#990000",
      "#ad9bb7"
    );
    return false;
  }
  if (!/[aeiou]/.test(texto)) {
    mostrarMensaje(
      "¡Atención!",
      "la palabra debe contener al menos una vocal.",
      "#990000",
      "#ad9bb7"
    );
    return false;
  }
  return true;
}

// Función para encriptar el texto ingresado
function encriptarTexto() {
  let palabraIngresada = document.getElementById("text-ingresado").value;

  if (!validarEntrada(palabraIngresada)) return;

  let palabraEncriptada = palabraIngresada
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("resultado").value = palabraEncriptada;

  mostrarResultado();
}

// Función para desencriptar el texto ingresado
function desencriptarTexto() {
  let palabraIngresada = document.getElementById("text-ingresado").value;

  if (!validarEntrada(palabraIngresada)) return;

  let palabraDesencriptada = palabraIngresada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("resultado").value = palabraDesencriptada;

  mostrarResultado();
}

// Función para copiar el texto encriptado o desencriptado
function copiarTexto() {
  let palabraCopiada = document.getElementById("resultado").value;
  navigator.clipboard
    .writeText(palabraCopiada)
    .then(() => {
      mostrarMensaje("¡Atención!", "Texto Copiado Con Éxito", "#d90429");
    })
    .catch((err) => {
      console.error("Error al copiar texto:", err);
    });

  limpiar();
}

// Función para limpiar los campos de texto y restablecer la interfaz
function limpiar() {
  document.querySelector("#text-ingresado").value = "";
  document.querySelector("#resultado").value = "";

  ocultarResultado();
}

// Funciones para mostrar y ocultar el resultado
function mostrarResultado() {
  document.querySelector(".panel-imagen").style.display = "none";
  document.querySelector(".texto-resultado").style.display = "flex";
}

function ocultarResultado() {
  document.querySelector(".panel-imagen").style.display = "flex";
  document.querySelector(".texto-resultado").style.display = "none";
}
