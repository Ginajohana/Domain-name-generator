const { name } = require("file-loader");

var pronombre = ["Vuestro", "El"];
var adjetivo = ["poderoso", "amable"];
var personaje = ["gato", "perro"];
var extencion = [".es", ".net",".com"];

for (var a = 0; a < pronombre.length; a++) {
  for (var b = 0; b < adjetivo.length; b++) {
    for (var c = 0; c < personaje.length; c++) {
      for (var d = 0; d < extencion.length; d++) {
        var domainName =
          pronombre[a] + adjetivo[b] + personaje[c] + extencion[d];
        console.log(domainName);
      }
    }
  }
}
