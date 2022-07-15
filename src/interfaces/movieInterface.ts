export interface MovieInterface {
  Actors: string;
  imdbID: string;
  Language: string;
  Plot: string;
  Poster: string;
  Runtime: string;
  Title: string;
  Year: string;
}

export interface MoviesInterface {
  Search: Array<MovieInterface>;
  totalResults: string;
}
