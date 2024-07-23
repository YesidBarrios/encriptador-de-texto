function asigTextElemen(elemento, texto) {
  let elementosHtml = document.querySelector(elemento);
  elementosHtml.innerHTML = texto;
}

function encriptarTexto() {
  let palabraIngresada = document.getElementById("text-ingresado").value;
  let condicion = /^[a-z\s]+$/; //expresion regular perimite minuscula y espacios

  if (palabraIngresada == "") {
    Swal.fire({
      title: "Campo Vacio",
      text: "Ingrese una Palabra para Inciar",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
    return;
  }
  if (condicion.test(palabraIngresada) == false) {
    Swal.fire({
      title: "Error, verifique la palabra ingresada",
      text: "Recuerde que no estan permitidas las mayusculas, acentos o caracteres especiales",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
    return;
  }
  let palabraEncriptada = palabraIngresada
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("resultado").value = palabraEncriptada;
  return;
}

function desencriptarTexto() {
  let palabraIngresada = document.getElementById("text-ingresado").value;
  let condicion = /^[a-z\s]+$/; //expresion regular perimite minuscula y espacios

  if (palabraIngresada == "") {
    Swal.fire({
      title: "Campo Vacio",
      text: "Ingrese una Palabra para Inciar",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
    return;
  }
  
  if (condicion.test(palabraIngresada) == false) {
    Swal.fire({
      title: "Error, verifique la palabra ingresada",
      text: "Recuerde que no estan permitidas las mayusculas, acentos o caracteres especiales",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
  let palabraDesencriptada = palabraIngresada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("resultado").value = palabraDesencriptada;

  return;
}
function copiarTexto() {
  let palabraCopiada = document.getElementById("resultado").value;
  navigator.clipboard
    .writeText(palabraCopiada)
    .then(() => {
      Swal.fire({
        title: "Copiado",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    })
    .catch((err) => {
      console.error("Error al copiar texto:", err);
    });
  limpiar();
}

function limpiar() {
  document.querySelector("#text-ingresado").value = "";
  document.querySelector("#resultado").value = "";
}

/*  document.getElementById("reiniciar").setAttribute("disabled", true); */
