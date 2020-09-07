import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, ActionReducerMap } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import {
  selectMovie,
  fetchMoviesSuccess,
  unselectMovie,
  enterSearchTerm,
  goToPage,
  clearSearch,
} from "./app.actions";
import { Movie } from "../models/omdb.model";

export interface AppState extends EntityState<Movie> {
  movies: Movie[];
  searchTerm: string;
  numOfResults: number;
  page: number;
  nominatedMovies: Movie[];
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.imdbID,
  sortComparer: false,
});

const initialState: AppState = adapter.getInitialState(<AppState>{
  searchTerm: null,
  numOfResults: 0,
  page: 1,
  nominatedMovies: [],
});

export const appReducer = createReducer(
  initialState,
  on(fetchMoviesSuccess, (state, { searchResponse, resetPage }) => {
    // TODO: remove.
    const page: number = resetPage ? 1 : state.page;
    if (searchResponse.Response) {
      return {
        ...state,
        movies: searchResponse.Search,
        numOfResults: +searchResponse.totalResults,
        page,
      };
    }
    return {
      ...state,
      movies: [],
      numOfResults: 0,
      page,
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
  })),
  on(enterSearchTerm, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  })),
  on(clearSearch, (state) => ({
    ...state,
    searchTerm: null,
    page: 1,
    movies: [],
  })),
  on(goToPage, (state, { page }) => ({
    ...state,
    page,
  }))
);

export const localStorageSyncReducer = (reducer) => {
  return localStorageSync({
    keys: [{ app: ["nominatedMovies", "searchTerm"] }],
    rehydrate: true,
  })(reducer);
};
