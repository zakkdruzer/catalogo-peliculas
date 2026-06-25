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

console.log("%cEtapa 3 · Marcar como vista (find + cambiar estado)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const marcarVista = (titulo) => { ... find + validación + cambiar vista ... };
const marcarVista = (titulo) => {
  const peli = peliculas.find((p) => p.titulo === titulo);

  if (!peli) {
    console.log(`❌ No existe: ${titulo}`);
    return;
  }

  peli.vista = true;
  console.log(`✅ Marcada como vista: ${peli.titulo}`);
};

// Prueba: marcarVista("Matrix")  y  marcarVista("Avatar")
marcarVista("Matrix");
marcarVista("Avatar");

console.log("")

console.log("%cEtapa 4 · Filtrar por género", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const porGenero = (genero) => peliculas.filter(...);
const porGenero = (genero) => peliculas.filter((p) => p.genero === genero);

// Prueba: muestra los títulos de las películas de "Acción"
const titulosAccion = porGenero("Acción").map((p) => p.titulo);
console.log("Acción:", titulosAccion);

console.log("")

console.log("%cEtapa 5 · Recomendar las no vistas", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const recomendar = () => peliculas.filter(...);
const recomendar = () => peliculas.filter((p) => !p.vista);

// Marca "Matrix" como vista y luego muestra los títulos recomendados
const recomendadas = recomendar().map((p) => p.titulo);
console.log("Te recomendamos:", recomendadas);

console.log("")