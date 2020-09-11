import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

export const selectAppState = createFeatureSelector<AppState>("app");

export const selectMovies = createSelector(
  selectAppState,
  (state: AppState) => state.movies
);

export const selectNominatedMovies = createSelector(
  selectAppState,
  (state: AppState) => state.nominatedMovies
);

export const selectNumOfResults = createSelector(
  selectAppState,
  (state: AppState) => state.numOfResults
);

export const selectPage = createSelector(
  selectAppState,
  (state: AppState) => state.page
);

export const selectSearchTerm = createSelector(
  selectAppState,
  (state: AppState) => state.searchTerm
);

export const selectSearchError = createSelector(
  selectAppState,
  (state: AppState) => state.searchError
);
