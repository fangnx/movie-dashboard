import { createAction, props } from "@ngrx/store";
import { Movie } from "../models/omdb.model";

export const searchForMovies = createAction(
  "[App] Search for Movies",
  props<{ searchValue: string }>()
);

export const fetchMoviesSuccess = createAction(
  "[App] Fetch Movies Success",
  props<{ movies: Movie[] }>()
);

export const selectMovie = createAction(
  "[App] Select Movie",
  props<{ movie: Movie }>()
);

export const unselectMovie = createAction(
  "[App] Unselect Movie",
  props<{ movieId: string }>()
);
