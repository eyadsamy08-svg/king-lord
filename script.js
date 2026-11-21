// MOVIE DATABASE
const films = [
    {
        title: "Night of the Living Dead",
        year: 1968,
        src: "https://archive.org/embed/night_of_the_living_dead"
    },
    {
        title: "His Girl Friday",
        year: 1940,
        src: "https://archive.org/embed/his_girl_friday"
    },
    {
        title: "A Trip to the Moon",
        year: 1902,
        src: "https://archive.org/embed/A_Trip_to_the_Moon"
    }
];

const list = document.getElementById("list");
const video = document.getElementById("video");
const now = document.getElementById("now");
const search = document.getElementById("search");
const noResults = document.getElementById("no-results");

function displayMovies(movieArray) {
    list.innerHTML = "";
    noResults.style.display = movieArray.length === 0 ? "block" : "none";

    movieArray.forEach(function(film) {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
            <div class="movie-poster">
                <span>${film.title}</span>
            </div>
            <div class="movie-info">
                <h3>${film.title}</h3>
                <p>${film.year}</p>
                <button class="watch-btn" type="button">Watch Movie</button>
            </div>
        `;

        card.querySelector("button").addEventListener("click", function() {
            playMovie(film);
        });

        list.appendChild(card);
    });
}

function playMovie(film) {
    video.src = film.src;
    now.textContent = "Now playing: " + film.title + " (" + film.year + ")";
    document.getElementById("player-section")
        .scrollIntoView({ behavior: "smooth" });
}

search.addEventListener("input", function() {
    const query = search.value.toLowerCase().trim();
    const filteredFilms = films.filter(function(film) {
        return film.title.toLowerCase().includes(query) ||
            String(film.year).includes(query);
    });

    displayMovies(filteredFilms);
});

displayMovies(films);
