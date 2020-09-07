import { Movie } from "./omdb.model";

export interface User {
  username: string;
  nominatedMovies: Movie[];
}
