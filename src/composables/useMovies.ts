import { ref } from "vue";
import { API_URL } from "@/lib/const";

import type {
  MovieInterface,
  MoviesInterface,
} from "@/interfaces/movieInterface";

const error = ref(null);
const isMovieLoading = ref(false);
const isMoviesLoading = ref(false);
const movie = ref<MovieInterface>();
const movies = ref<MoviesInterface>();
const pageIndex = ref(1);
const searchInput = ref("");

export function useMovies() {
  /**
   * Returns a movie API response.
   *
   * @param {string} imdbID - The IMDB ID.
   * @returns {promise}
   */
  const fetchMovie = (imdbID: string) => {
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
  const fetchMovies = (isNextPage = false) => {
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

  const resetData = () => {
    error.value = null;
    movies.value = { Response: "", totalResults: "0", Search: [] };
    pageIndex.value = 1;
  };

  return {
    error,
    fetchMovie,
    fetchMovies,
    isMovieLoading,
    isMoviesLoading,
    movie,
    movies,
    pageIndex,
    resetData,
    searchInput,
  };
}
