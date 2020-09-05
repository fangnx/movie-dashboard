export interface Movie {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
}

export enum SearchType {
  movie = "movie",
  series = "series",
  episode = "episode",
}

export interface SearchResponse {
  Response: boolean;
  Search: Movie[];
}
