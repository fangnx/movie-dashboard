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

export const selectUser = createSelector(
  selectAppState,
  (state: AppState) => state.user
);
