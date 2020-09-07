import { createAction, props } from "@ngrx/store";
import { Movie, SearchResponse } from "../models/omdb.model";

export const searchForMovies = createAction(
  "[App] Search for Movies",
  props<{ searchValue: string }>()
);

export const fetchMoviesSuccess = createAction(
  "[App] Fetch Movies Success",
  props<{ searchResponse: SearchResponse; resetPage?: boolean }>()
);

export const populateNominations = createAction(
  "[App] Populate Nominations",
  props<{ movieIds: string[] }>()
);

export const populateNominationsSuccess = createAction(
  "[App] Populate Nominations Success",
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

export const enterSearchTerm = createAction(
  "[App] Enter Search Term",
  props<{ searchTerm: string }>()
);

export const clearSearch = createAction("[App] Clear Search");

export const goToPage = createAction(
  "[App] Go to Page",
  props<{ page: number }>()
);

export const checkNominationStatus = createAction(
  "[App] Check Nomination Status"
);
