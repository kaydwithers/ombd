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

  fetch(`${API_URL}?apikey=${import.meta.env.VITE_API_KEY}&i=${imdbID}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      isMovieLoading.value = false;
      error.value = null;
      movie.value = data;
    })
    .catch((error) => {
      console.error(`Failed fetchMovie(): ${error}`);
      isMovieLoading.value = false;
      error.value = error;
    });
};

/**
 * Returns a movies API response.
 *
 * @param {boolean} isNextPage - Whether or not a page has been modified.
 * @returns {promise}
 */
export const fetchMovies = (isNextPage = false) => {
  isMoviesLoading.value = true;

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

      if (data.Response === "True") {
        if (!isNextPage) {
          resetData();
        }
        movies.value = data;
      } else if (data.Response === "False" && data.Error) {
        resetData();
        error.value = data.Error;
      }
    })
    .catch((error) => {
      console.error(`Failed fetchMovies(): ${error}`);
      isMoviesLoading.value = false;
      error.value = error;
    });
};

/**
 * Resets the data.
 */
export const resetData = () => {
  error.value = null;
  movies.value = { Response: "", totalResults: "0", Search: [] };
  pageIndex.value = 1;
};
