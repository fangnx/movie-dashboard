import { Injectable, Inject } from "@angular/core";
import { Location } from "@angular/common";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { Actions, ofType, Effect } from "@ngrx/effects";
import * as AppActions from "./app.actions";
import { AppState } from "./app.reducer";
import { OmdbService } from "../services/omdb.service";
import {
  selectSearchTerm,
  selectPage,
  selectNominatedMovies,
} from "./app.selector";
import { EMPTY } from "rxjs";
import { NotificationService } from "../services/notification.service";
import { UriHelper } from "../components/helpers/uri.helper";

@Injectable()
export class AppEffects {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private omdbService: OmdbService,
    private notificationService: NotificationService,
    private location: Location
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

  @Effect()
  checkNominationStatus$ = this.actions$.pipe(
    ofType(AppActions.selectMovie, AppActions.unselectMovie),
    withLatestFrom(this.store.select((state) => selectNominatedMovies(state))),
    switchMap(() => {
      return [AppActions.checkNominationStatus()];
    })
  );

  @Effect()
  sendNotification$ = this.actions$.pipe(
    ofType(AppActions.checkNominationStatus),
    withLatestFrom(this.store.select((state) => selectNominatedMovies(state))),
    switchMap(([_, nominatedMovies]) => {
      if (nominatedMovies.length === 5) {
        this.notificationService.success("You have nominated five movies!");
      } else {
        this.notificationService.clear();
      }
      return EMPTY;
    })
  );

  @Effect()
  changeUriParams$ = this.actions$.pipe(
    ofType(AppActions.selectMovie, AppActions.unselectMovie),
    withLatestFrom(this.store.select((state) => selectNominatedMovies(state))),
    switchMap(([_, nominatedMovies]) => {
      if (nominatedMovies.length > 0) {
        const params: string = UriHelper.generateParamsFromIds(
          nominatedMovies.map((movie) => movie.imdbID)
        );
        this.location.go(params);
      }

      return EMPTY;
    })
  );
}
