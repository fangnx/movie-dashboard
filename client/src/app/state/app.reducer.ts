import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Movie } from "../models/omdb.model";
import { User } from "../models/user.model";
import { selectMovie, fetchMoviesSuccess, unselectMovie } from "./app.actions";

export interface AppState extends EntityState<Movie> {
  movies: Movie[];
  nominatedMovies: Movie[];
  user: User;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.imdbID,
  sortComparer: false,
});

const initialState: AppState = adapter.getInitialState(<AppState>{
  nominatedMovies: [],
  user: null,
});

export const appReducer = createReducer(
  initialState,
  on(fetchMoviesSuccess, (state, { movies }) => {
    console.log(movies);
    return {
      ...state,
      movies,
    };
  }),
  on(selectMovie, (state, { movie }) => ({
    ...state,
    nominatedMovies: [...state.nominatedMovies, movie],
  })),
  on(unselectMovie, (state, { movieId }) => ({
    ...state,
    nominatedMovies: state.nominatedMovies.filter(
      (movie) => movie.imdbID !== movieId
    ),
  }))
);
