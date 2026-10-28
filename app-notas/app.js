const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");
const lista = document.getElementById("lista");
const vacio = document.getElementById("vacio");
const contador = document.getElementById("contador");
const botonAgregar = document.getElementById("agregar");
const campoTitulo = document.getElementById("titulo");
const campoTexto = document.getElementById("texto");
const campoCategoria = document.getElementById("categoria");

let notas = [];
let ultimaEliminada = null;
let temporizadorMensaje = null;

function mostrarMensaje(texto, tipo, conDeshacer) {
  clearTimeout(temporizadorMensaje);
  mensaje.textContent = texto + " ";
  mensaje.className = "mensaje " + tipo;
  if (conDeshacer) {
    const deshacer = document.createElement("button");
    deshacer.type = "button";
    deshacer.className = "boton-deshacer";
    deshacer.textContent = "Deshacer";
    deshacer.addEventListener("click", restaurarNota);
    mensaje.appendChild(deshacer);
  } else {
    temporizadorMensaje = setTimeout(function () {
      mensaje.textContent = "";
      mensaje.className = "mensaje";
    }, 4000);
  }
}

// Prevención de errores: el botón solo se activa si hay contenido real (no solo espacios).
function actualizarBoton() {
  const completo =
    campoTitulo.value.trim() !== "" &&
    campoTexto.value.trim() !== "" &&
    campoCategoria.value !== "";
  botonAgregar.disabled = !completo;
}

function dibujar() {
  lista.innerHTML = "";
  notas.forEach(function (nota) {
    const li = document.createElement("li");

    const info = document.createElement("div");
    const titulo = document.createElement("strong");
    titulo.className = "nota-titulo";
    titulo.textContent = nota.titulo;
    const texto = document.createElement("span");
    texto.className = "nota-texto";
    texto.textContent = nota.texto;
    const categoria = document.createElement("span");
    categoria.className = "nota-categoria";
    categoria.textContent = "Categoría: " + nota.categoria;
    info.append(titulo, texto, categoria);

    const eliminar = document.createElement("button");
    eliminar.type = "button";
    eliminar.className = "boton-peligro";
    eliminar.textContent = "Eliminar";
    eliminar.setAttribute("aria-label", "Eliminar la nota " + nota.titulo);
    eliminar.addEventListener("click", function () {
      eliminarNota(nota.id);
    });

    li.append(info, eliminar);
    lista.appendChild(li);
  });
  contador.textContent = "(" + notas.length + ")";
  vacio.hidden = notas.length > 0;
}

function agregarNota() {
  notas.push({
    id: Date.now() + Math.random(),
    titulo: campoTitulo.value.trim(),
    texto: campoTexto.value.trim(),
    categoria: campoCategoria.value
  });
  dibujar();
}

function eliminarNota(id) {
  const posicion = notas.findIndex(function (n) { return n.id === id; });
  if (posicion === -1) return;
  ultimaEliminada = { nota: notas[posicion], posicion: posicion };
  notas.splice(posicion, 1);
  dibujar();
  mostrarMensaje("Nota eliminada.", "info", true);
  campoTitulo.focus();
}

function restaurarNota() {
  if (!ultimaEliminada) return;
  notas.splice(ultimaEliminada.posicion, 0, ultimaEliminada.nota);
  ultimaEliminada = null;
  dibujar();
  mostrarMensaje("Nota restaurada.", "exito");
}

formulario.addEventListener("input", actualizarBoton);
formulario.addEventListener("change", actualizarBoton);

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  formulario.classList.add("validado");

  if (campoTitulo.value.trim() === "" || campoTexto.value.trim() === "" || campoCategoria.value === "") {
    mostrarMensaje("Revisa los campos marcados en rojo.", "error");
    const primero = [campoTitulo, campoTexto, campoCategoria].find(function (c) {
      return c.value.trim() === "";
    });
    if (primero) primero.focus();
    return;
  }

  agregarNota();
  formulario.reset();
  formulario.classList.remove("validado");
  actualizarBoton();
  mostrarMensaje("Nota agregada.", "exito");
  campoTitulo.focus();
});

formulario.addEventListener("reset", function (evento) {
  const hayDatos = campoTitulo.value !== "" || campoTexto.value !== "" || campoCategoria.value !== "";
  if (hayDatos && !confirm("¿Seguro que quieres borrar lo que escribiste?")) {
    evento.preventDefault();
    return;
  }
  formulario.classList.remove("validado");
  setTimeout(actualizarBoton, 0);
  mostrarMensaje("Formulario limpio. Puedes empezar de nuevo.", "info");
});

dibujar();
