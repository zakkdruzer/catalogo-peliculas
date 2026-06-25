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

console.log("%cEtapa 6 · Tiempo total visto (filter + reduce)", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// const tiempoTotalVisto = () => peliculas.filter(...).reduce(...);
const tiempoTotalVisto = () =>
  peliculas
    .filter((p) => p.vista)
    .reduce((acc, p) => acc + p.duracion, 0);

// Marca "Matrix" e "Inception" como vistas y muestra el total de minutos
marcarVista("Inception");
marcarVista("Matrix");
console.log(`Tiempo total visto: ${tiempoTotalVisto()} min`);

console.log("")

console.log("%c🏆 Jefe Final · El menú do/while", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

let opcion;

const verTodas = () => {
  peliculas.forEach((p, i) => {
    const marca = p.vista ? "[✓]" : "[ ]";
    console.log(`${marca} ${i + 1}. ${p.titulo} (${p.genero}, ${p.duracion} min)`);
  });
};

do {
  console.log("\n=== MI CATÁLOGO ===");
  console.log("1) Agregar");
  console.log("2) Ver todas");
  console.log("3) Marcar como vista");
  console.log("4) Filtrar por género");
  console.log("5) Recomendar");
  console.log("6) Tiempo total visto");
  console.log("7) Salir");

  opcion = prompt(`
    Selecciona una opción:
    1) Agregar
    2) Ver todas
    3) Marcar como vista
    4) Filtrar por género
    5) Recomendar
    6) Tiempo total visto
    7) Salir
    `);

  if (opcion === "1") {
    const titulo = prompt("Título:");
    const genero = prompt("Género:");
    const duracion = prompt("Duración en minutos:");

    agregar(titulo, genero, duracion);
    console.log(`✅ Agregada: ${titulo}`);
  } else if (opcion === "2") {
    verTodas();
  } else if (opcion === "3") {
    const titulo = prompt("Título:");
    marcarVista(titulo);
  } else if (opcion === "4") {
    const genero = prompt("Género:");
    const titulos = porGenero(genero).map((p) => p.titulo);
    console.log(`${genero}:`, titulos);
  } else if (opcion === "5") {
    const titulos = recomendar().map((p) => p.titulo);
    console.log("Te recomendamos:", titulos);
  } else if (opcion === "6") {
    console.log(`Tiempo visto: ${tiempoTotalVisto()} min`);
  } else if (opcion === "7") {
    console.log("¡Buen maratón! 🍿");
  } else {
    console.log("❌ Opción inválida");
  }
} while (opcion !== "7");

console.log("")