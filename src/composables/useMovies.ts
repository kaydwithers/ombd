import { ref } from "vue";
import { API_URL } from "@/lib/const";

import type {
  MovieInterface,
  MoviesInterface,
} from "@/interfaces/movieInterface";

export const error = ref(null);
export const isMovieLoading = ref(false);
export const isMoviesLoading = ref(false);
export const movie = ref<MovieInterface>();
export const movies = ref<MoviesInterface>();
export const pageIndex = ref(1);
export const searchInput = ref("");

/**
 * Returns a movie API response.
 *
 * @param {string} imdbID - The IMDB ID.
 * @returns {promise}
 */
export const fetchMovie = (imdbID: string) => {
  isMovieLoading.value = true;
  error.value = null;

  fetch(`${API_URL}?apikey=${import.meta.env.VITE_API_KEY}&i=${imdbID}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      isMovieLoading.value = false;
      movie.value = data;
    })
    .catch((error) => {
      console.error(`Failed getCharacter(): ${error}`);
      isMovieLoading.value = false;
      error.value = error;
    });
};

/**
 * Returns a movies API response.
 *
 * @returns {promise}
 */
export const fetchMovies = () => {
  isMoviesLoading.value = true;
  error.value = null;

  fetch(
    `${API_URL}?apikey=${import.meta.env.VITE_API_KEY}&type=movie&s=${
      searchInput.value
    }&page=${pageIndex.value}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      isMoviesLoading.value = false;
      if (data.Error) {
        error.value = data.Error;
      }
      movies.value = data;
    })
    .catch((error) => {
      console.error(`Failed getCharacters(): ${error}`);
      isMoviesLoading.value = false;
      error.value = error;
    });
};

/**
 * Resets the data.
 */
export const resetData = () => {
  movies.value = {};
  searchInput.value = "";
};
