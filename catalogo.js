console.log("%cEtapa 1 · El catálogo inicial", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

const peliculas = [
  { titulo: "Matrix",    genero: "Acción",    duracion: 136, vista: false },
  { titulo: "Coco",      genero: "Animación", duracion: 105, vista: false },
  { titulo: "Inception", genero: "Acción",    duracion: 148, vista: false },
];

// Recorre 'peliculas' con forEach e imprime nº, título, género y duración.

peliculas.forEach((p, i) => {
  console.log(`${i + 1}. ${p.titulo} (${p.genero}, ${p.duracion} min)`);
});

console.log("")