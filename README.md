# Catálogo de Películas

Proyecto de práctica en JavaScript para trabajar con arreglos de objetos, funciones flecha, `forEach`, `find`, `filter`, `map`, `reduce` y un menú interactivo con `do/while`.

## Descripción

Este ejercicio permite administrar un catálogo simple de películas desde consola o navegador, siguiendo varias etapas:

- Mostrar todas las películas.
- Agregar películas nuevas.
- Marcar películas como vistas.
- Filtrar películas por género.
- Recomendar las no vistas.
- Calcular el tiempo total visto.
- Navegar todo desde un menú interactivo.

## Tecnologías usadas

- HTML
- JavaScript
- Console / `prompt()`

## Funcionalidades

- Recorrer un arreglo de películas con `forEach`.
- Agregar elementos con `push`.
- Buscar una película con `find`.
- Filtrar por género con `filter`.
- Obtener títulos con `map`.
- Sumar duración total con `reduce`.
- Menú interactivo con `do/while`.

## Estructura de datos

Cada película tiene esta forma:

```js
{
  titulo: "Matrix",
  genero: "Acción",
  duracion: 136,
  vista: false
}
```

## Uso

1. Abrir el archivo `catalogo.js`.
2. Ejecutar el script en consola o en el navegador.
3. Usar el menú para interactuar con el catálogo.

## Menú disponible

1. Agregar película.
2. Ver todas las películas.
3. Marcar como vista.
4. Filtrar por género.
5. Recomendar no vistas.
6. Ver tiempo total visto.
7. Salir.

## Ejemplo de salida

```txt
=== MI CATÁLOGO ===
1) Agregar
2) Ver todas
3) Marcar como vista
4) Filtrar por género
5) Recomendar
6) Tiempo total visto
7) Salir
```

## Aprendizajes

Este proyecto ayuda a practicar:

- Arreglos de objetos.
- Funciones flecha.
- Métodos de arreglos.
- Lógica condicional.
- Ciclos `do/while`.
- Manejo de datos en JavaScript.

## Puedes ver el resultado en:

https://zakkdruzer.github.io/catalogo-peliculas/
