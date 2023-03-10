"use strict";

let id_movie = localStorage.getItem("id");
const url_movie = `https://yts.mx/api/v2/movie_details.json?movie_id=${id_movie}`;

fetch(url_movie)
  .then((res) => res.json())
  .then((data) => console.log(data.data.movie));

function movie_info() {
  fetch(url_movie)
  .then((res) => res.json())
  .then((data) => {
    const detail = data.data.movie;
    const genre = data.data.movie.genres;
    const movie_img = document.getElementById('movie_img');
    const movie_title = document.getElementById('movie_title');
    const movie_year = document.getElementById('movie_year');
    const movie_rating = document.getElementById('movie_rating');
    const movie_runtime = document.getElementById('movie_runtime');
    const movie_genres = document.getElementById('movie_genres');
    const movie_intro = document.getElementById('movie_intro');
    movie_img.src = detail.medium_cover_image;
    movie_title.append(detail.title);
    movie_year.append(detail.year);
    movie_rating.append(detail.rating);
    movie_runtime.append(detail.runtime);
    genre.map((item,index) => {
      movie_genres.append(item + " ");
    });
    movie_intro.append(detail.description_full);
  });
}

movie_info();

