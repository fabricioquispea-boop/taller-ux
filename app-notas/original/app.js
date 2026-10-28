var notas = [];

document.getElementById("agregar").addEventListener("click", function () {
  var nota = {
    titulo: document.getElementById("titulo").value,
    texto: document.getElementById("texto").value,
    categoria: document.getElementById("categoria").value
  };
  notas.push(nota);
  dibujar();
});

function dibujar() {
  var lista = document.getElementById("lista");
  lista.innerHTML = "";
  notas.forEach(function (n, i) {
    var li = document.createElement("li");
    li.innerHTML = n.titulo + " - " + n.texto + " (" + n.categoria + ") ";
    var a = document.createElement("a");
    a.href = "#";
    a.textContent = "BORRAR";
    a.addEventListener("click", function () {
      notas.splice(i, 1);
      dibujar();
    });
    li.appendChild(a);
    lista.appendChild(li);
  });
}
