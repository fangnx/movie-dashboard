import { Injectable } from "@angular/core";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Actions, ofType, Effect } from "@ngrx/effects";
import * as AppActions from "./app.actions";
import { AppState } from "./app.reducer";
import { OmdbService } from "../services/omdb.service";
import { selectSearchTerm, selectPage } from "./app.selector";
import { combineLatest } from "rxjs";

@Injectable()
export class AppEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private omdbService: OmdbService
  ) {}

  @Effect()
  enterSearchTerm$ = this.actions$.pipe(
    ofType(AppActions.searchForMovies),
    switchMap((action) => {
      return [AppActions.enterSearchTerm({ searchTerm: action.searchValue })];
    })
  );

  @Effect()
  fetchMovies$ = this.actions$.pipe(
    ofType(AppActions.searchForMovies),
    switchMap((action) => {
      return this.omdbService
        .searchForTitle(action.searchValue)
        .pipe(
          map((searchResponse) =>
            AppActions.fetchMoviesSuccess({ searchResponse, resetPage: true })
          )
        );
    })
  );

  @Effect()
  fetchMoviesOnPageChange$ = this.actions$.pipe(
    ofType(AppActions.goToPage),
    withLatestFrom(
      this.store.select((state) => selectSearchTerm(state)),
      this.store.select((state) => selectPage(state))
    ),
    switchMap(([_, searchTerm, page]) => {
      return this.omdbService
        .searchForTitle(searchTerm, page)
        .pipe(
          map((searchResponse) =>
            AppActions.fetchMoviesSuccess({ searchResponse })
          )
        );
    })
  );
}
