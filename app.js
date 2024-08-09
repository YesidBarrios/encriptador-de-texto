// Función para asignar texto y color a un elemento HTML
function asigTextElemen(elemento, texto, color, fondo) {
  let elementosHtml = document.querySelector(elemento);
  elementosHtml.innerHTML = texto;
  elementosHtml.style.color = color;
  elementosHtml.style.backgroundColor = fondo;
}

// Función para mostrar mensajes en el panel de mensajes
function mostrarMensaje(mensaje, detalle, color, fondo) {
  asigTextElemen(".panel-mensaje", mensaje, color, fondo);
  asigTextElemen(".panel-parrafo", detalle, color, fondo);
}

function validarEntrada(texto) {
  // Verifica si el texto está vacío
  if (texto === "") {
    // Si el texto está vacío (la condición se cumple), se muestra un mensaje de advertencia
    mostrarMensaje(
      "¡Atención!",
      "Verifique que su entrada no esté vacía.",
      "#990000", 
      "#ad9bb7" 
    );
    // Retorna false porque la entrada no es válida si está vacía
    return false;
    // Si el texto no está vacío, la validación continúa
  }

  if (!/^[a-z\s]+$/.test(texto)) {
    // Si el texto contiene caracteres que no sean letras minúsculas o espacios (la condición se cumple), se muestra un mensaje de advertencia
    mostrarMensaje(
      "¡Atención!",
      "El texto debe contener solo minúsculas y espacios.",
      "#990000", 
      "#ad9bb7" 
    );
    return false;
  }

  if (!/[aeiou]/.test(texto)) {
    // Si el texto no contiene ninguna vocal (la condición se cumple), se muestra un mensaje de advertencia
    mostrarMensaje(
      "¡Atención!",
      "La texto debe contener al menos una vocal.",
      "#990000", 
      "#ad9bb7" 
    );
    return false;
  }
  return true;
  // Si el texto pasa todas las validaciones anteriores, retorna true
}


function encriptarTexto() {
  // Resetea la interfaz antes de realizar cualquier acción
  resetearInterfaz();

  let palabraIngresada = document.getElementById("text-ingresado").value;

  // Llama a la función validarEntrada para verificar si el texto es válido
  if (!validarEntrada(palabraIngresada)) {
    // Si validarEntrada retorna false, se detiene la ejecución de la función encriptarTexto
    return;
  }

  // Si validarEntrada retorna true, el texto se encripta reemplazando las vocales por códigos
  let palabraEncriptada = palabraIngresada
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("resultado").value = palabraEncriptada;

  mostrarResultado();
}


function desencriptarTexto() {
  // Resetea la interfaz antes de realizar cualquier acción
  resetearInterfaz();
  let palabraIngresada = document.getElementById("text-ingresado").value;
  // Llama a la función validarEntrada para verificar si el texto es válido
  if (!validarEntrada(palabraIngresada)) {
    // Si validarEntrada retorna false, se detiene la ejecución de la función desencriptarTexto
    return;
  }

  // Verifica si el texto necesita ser desencriptado
  if (!/(enter|imes|ai|ober|ufat)/.test(palabraIngresada)) {
    // Si el texto no contiene códigos encriptados, muestra un mensaje de advertencia
    mostrarMensaje(
      "¡Atención!",
      "Esta palabra no necesita ser desencriptada",
      "#990000",
      "#ad9bb7"
    );
    // Detiene la ejecución de la función desencriptarTexto
    return;
  }

  // Si el texto necesita ser desencriptado, reemplaza los códigos por las vocales originales
  let palabraDesencriptada = palabraIngresada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // Asigna el texto desencriptado al campo de resultado
  document.getElementById("resultado").value = palabraDesencriptada;
  mostrarResultado();
}

function copiarTexto() {
  let palabraCopiada = document.getElementById("resultado").value;
  navigator.clipboard
    .writeText(palabraCopiada)
    .then(() => {
      mostrarMensaje(
        "¡Atención!",
        "Texto Copiado Con Éxito",
        "#990000",
        "#ad9bb7" 
      );
    })
    .catch((err) => {
      console.error("Error al copiar texto:", err);
    });

  limpiar();
}

// Función para resetear el estado de la interfaz
function resetearInterfaz() {
  ocultarResultado();
  mostrarMensaje("", "", "", ""); 
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

// Añadir eventos para el campo de entrada
document
  .getElementById("text-ingresado")
  .addEventListener("focus", function () {
    this.placeholder = ""; // Oculta el placeholder al darle click, innecesario pero me gusta
  });

document.getElementById("text-ingresado").addEventListener("blur", function () {
  if (this.value === "") {
    this.placeholder = "Ingresa el texto a encriptar o desencriptar"; // Restaura el placeholder si está vacío, vuelve el mensaje
  }
});
