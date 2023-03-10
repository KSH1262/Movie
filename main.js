"use strict";

let movie_id = '';
const like_btn = document.getElementById("like_movieBtn");
const url = "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count";

const json = fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data.data.movies));

// api사용 및 영화 이미지 생성
function like_movie() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const like = data.data.movies;
      like.map((item, index) => {
        const like_movie_btn = document.createElement("button");
        const img = document.createElement("img");
        const like_movie_img = item.medium_cover_image;
        img.src = like_movie_img;
        like_movie_btn.id = item.id;
        like_movie_btn.appendChild(img);
        like_movie_btn.setAttribute('onclick', 'on_click(this.id)')
        document.querySelector("#like_movieBtn").append(like_movie_btn);
      });
    });
}

function on_click(click_id) {
  movie_id = click_id;
  localStorage.setItem('id',movie_id);
  location.href ='movie.html';
}

like_movie();
