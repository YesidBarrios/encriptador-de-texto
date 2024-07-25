function asigTextElemen(elemento, texto) {
  let elementosHtml = document.querySelector(elemento);
  elementosHtml.innerHTML = texto;
}

function encriptarTexto() {
  let palabraIngresada = document.getElementById("text-ingresado").value;
  let condicion = /^[a-z\s]+$/; // Expresión regular permite minúsculas y espacios

  if (palabraIngresada === "") {
    alert("Entrada vacia"); // Cambié showAlert por alert
    return;
  }
  if (!condicion.test(palabraIngresada)) {
    alert("La entrada debe contener solo minúsculas y espacios.");
    return;
  }
  if (!/[aeiou]/.test(palabraIngresada)) {
    alert("La entrada debe contener al menos una vocal.");
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
    alert("campo vacio");
    return;
  }

  if (!condicion.test(palabraIngresada)) {
    alert("La entrada debe contener solo minúsculas y espacios.");
    return;
  }

  let palabraDesencriptada = palabraIngresada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("resultado").value = palabraDesencriptada;

  document.querySelector(".panel-imagen").style.display = "block";
  document.querySelector(".texto-resultado").style.display = "none";
}

function copiarTexto() {
  let palabraCopiada = document.getElementById("resultado").value;
  navigator.clipboard
    .writeText(palabraCopiada)
    .then(() => {
      alert("Texto copiado al portapapeles");
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
