import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { switchMap, map } from "rxjs/operators";
import * as AppActions from "./app.actions";
import { AppState } from "./app.reducer";
import { OmdbService } from "../services/omdb.service";

@Injectable()
export class AppEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private omdbService: OmdbService
  ) {}

  @Effect()
  fetchMovies$ = this.actions$.pipe(
    ofType(AppActions.searchForMovies),
    switchMap((action) => {
      console.log(action.searchValue);
      return this.omdbService
        .searchForTitle(action.searchValue)
        .pipe(map((movies) => AppActions.fetchMoviesSuccess({ movies })));
    })
  );
}
