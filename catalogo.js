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

console.log("%cEtapa 2 · Agregar películas", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const agregar = (titulo, genero, duracion) => { ... push con vista: false ... };
const agregar = (titulo, genero, duracion) => {
  peliculas.push({
    titulo,
    genero,
    duracion,
    vista: false
  });
};

// Agrega "Toy Story" (Animación, 81) y muestra peliculas.length
agregar("Toy Story", "Animación", 81);
console.log(`Total de películas: ${peliculas.length}`);

console.log("")