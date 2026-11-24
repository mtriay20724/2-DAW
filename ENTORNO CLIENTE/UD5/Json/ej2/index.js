const datos = {
  "Search": [
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode III - Revenge of the Sith",
      "Year": "2005",
      "imdbID": "tt0121766",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "imdbID": "tt0121765",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTgxMjY2YzUtZmVmNC00YjAwLWJlODMtNDBhNzllNzIzMjgxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VIII - The Last Jedi",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek",
      "Year": "2009",
      "imdbID": "tt0796366",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
    }
  ],
  "totalResults": "4947",
  "Response": "True"
};

// Crea y devuelve el <article> de una película
function crearTarjeta(pelicula) {
  // <article class="tarjeta">
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  // <img>
  const poster = document.createElement("img");
  poster.classList.add("tarjeta__poster");
  poster.src = pelicula.Poster;
  poster.alt = `Póster de ${pelicula.Title}`;

  // <div class="tarjeta__info">
  const info = document.createElement("div");
  info.classList.add("tarjeta__info");

  // <h2>
  const titulo = document.createElement("h2");
  titulo.classList.add("tarjeta__titulo");
  titulo.textContent = pelicula.Title;

  // <p> con <time> y <span>
  const datosPeli = document.createElement("p");
  datosPeli.classList.add("tarjeta__datos");

  const anio = document.createElement("time");
  anio.dateTime = pelicula.Year;
  anio.textContent = pelicula.Year;

  const tipo = document.createElement("span");
  tipo.classList.add("tarjeta__tipo");
  tipo.textContent = pelicula.Type;

  datosPeli.append(anio, tipo);

  // <a> a IMDb
  const enlace = document.createElement("a");
  enlace.classList.add("tarjeta__enlace");
  enlace.href = `https://www.imdb.com/title/${pelicula.imdbID}`;
  enlace.target = "_blank";
  enlace.rel = "noopener";
  enlace.textContent = "Ver en IMDb";

  // Montar el árbol de dentro hacia fuera
  info.append(titulo, datosPeli, enlace);
  tarjeta.append(poster, info);

  return tarjeta;
}

// Total de resultados en la cabecera
document.getElementById("total").textContent =
  `${datos.totalResults} resultados encontrados`;

// Ordenar por año (copia con [...] para no modificar el array original)
const peliculasOrdenadas = [...datos.Search].sort(
  (a, b) => Number(a.Year) - Number(b.Year)
);

// Pintar todas las tarjetas
const contenedor = document.getElementById("peliculas");

peliculasOrdenadas.forEach((pelicula) => {
  contenedor.appendChild(crearTarjeta(pelicula));
});