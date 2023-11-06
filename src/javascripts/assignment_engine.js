//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { movies } from './assignment'

for (let m of movies) {

    let m_thumb = document.getElementById('m' + m.id)
    m_thumb.innerHTML = `
        <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>

    `
    m_thumb.onclick = function () {
        displaymovie(m)
    }
}

let featured_movie = document.querySelector(".featured")

function displaymovie(movie) {
    featured_movie.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.plot}</p>
    </div>
</div>
    `
}

displaymovie(movies[0])