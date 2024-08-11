// Función para asignar texto y color a un elemento HTML
function asigTextElemen(elemento, texto, color) {
  let elementosHtml = document.querySelector(elemento);
  elementosHtml.innerHTML = texto;
  elementosHtml.style.color = color;
}

// Función para mostrar mensajes en el panel de mensajes
function mostrarMensaje(mensaje, detalle, color) {
  asigTextElemen(".panel-mensaje", mensaje, color);
  asigTextElemen(".panel-parrafo", detalle, color);
}

//funcionpara sacudir panel-imagen si hay un error
function shakePanel() {
  const panelImagen = document.querySelector('.panel-imagen');
  panelImagen.classList.add('shake');
  // Eliminar la clase después de la animación para que se pueda reutilizar
  setTimeout(() => {
    panelImagen.classList.remove('shake');
  }, 300);
}

function validarEntrada(texto) {
  // Verifica si el texto está vacío
  if (texto === "") {
    mostrarMensaje(
      "¡Atención!",
      "Verifique que su entrada no esté vacía.",
      "#FF4040", 
    );
    shakePanel()
    // Retorna false porque la entrada no es válida si está vacía
    return false;
    // Si el texto no está vacío, la validación continúa
  }

  if (!/^[a-z\s]+$/.test(texto)) {
    mostrarMensaje(
      "¡Atención!",
      "El texto debe contener solo minúsculas y espacios.",
     "#FF4040", 
  
    );
    shakePanel()
    return false;
  }

  if (!/[aeiou]/.test(texto)) {
    mostrarMensaje(
      "¡Atención!",
      "La texto debe contener al menos una vocal.",
      "#FF4040" 
    );
    shakePanel()
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
  resetearInterfaz();
  let palabraIngresada = document.getElementById("text-ingresado").value;
  if (!validarEntrada(palabraIngresada)) {
    // Si validarEntrada retorna false, se detiene la ejecución de la función desencriptarTexto
    return;
  }

  // Verifica si el texto necesita ser desencriptado
  if (!/(enter|imes|ai|ober|ufat)/.test(palabraIngresada)) {
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

// Función para limpiar los campos de textarea
function limpiar() {
  document.querySelector("#text-ingresado").value = "";
  document.querySelector("#resultado").value = "";
  ocultarResultado();
}


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
    this.placeholder = "Escribe Aqui"; 
  }
});


function cambiarTema() {
  const temaSeleccionado = document.getElementById('selector-tema').value;
  const enlaceTema = document.getElementById('tema-css');
  
  if (temaSeleccionado) {
      enlaceTema.href = `css/${temaSeleccionado}`;
  } else {
      enlaceTema.href = ''; 
  }
}
