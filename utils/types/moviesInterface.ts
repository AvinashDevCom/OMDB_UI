export interface moviesItem {
  imdbID: number | string;
  Title: string;
  Year: string;
  overview: string;
  Poster: string;
  imdbVotes: string;
  imdbRating: string;
  Plot: string;
}
export interface movieList {
  Response: "True" | "False";
  Search: [moviesItem];
}
export interface getMoviesDetails extends moviesItem {
  Response: "True" | "False";
}
