import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import {
  selectMovies,
  selectNominatedMovies,
  selectNumOfResults,
  selectPage,
  selectSearchTerm,
  selectSearchError,
} from "../../state/app.selector";
import { AppState } from "../../state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { fadeInOnEnterAnimation } from "angular-animations";
import { Movie } from "../../models/omdb.model";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOnEnterAnimation()],
})
export class DashboardComponent implements OnInit {
  public movies$: Observable<Movie[]>;
  public numOfResults$: Observable<Number>;
  public page$: Observable<Number>;
  public searchTerm$: Observable<string>;
  public searchError$: Observable<string>;
  public nominatedMovies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.initNominations();

    this.movies$ = this.store.select((state) => selectMovies(state));

    this.numOfResults$ = this.store.select((state) =>
      selectNumOfResults(state)
    );

    this.page$ = this.store.select((state) => selectPage(state));

    this.nominatedMovies$ = this.store.select((state) =>
      selectNominatedMovies(state)
    );

    this.searchTerm$ = this.store.select((state) => selectSearchTerm(state));

    this.searchError$ = this.store.select((state) => selectSearchError(state));
  }

  private initNominations(): void {
    if (
      this.route.snapshot.queryParams &&
      this.route.snapshot.queryParams.nominations
    ) {
      const movieIds: string[] = this.route.snapshot.queryParams.nominations.split(
        ","
      );
      this.store.dispatch(AppActions.populateNominations({ movieIds }));
    }
  }

  public handleEnterSearch(searchTerm): void {
    this.store.dispatch(
      AppActions.searchForMovies({ searchValue: searchTerm })
    );
  }

  public handlecClearSearch(): void {
    this.store.dispatch(AppActions.clearSearch());
  }

  public handleChangePage(page: number): void {
    this.store.dispatch(AppActions.goToPage({ page: page + 1 }));
  }

  public handleNominateMovie(movie: Movie): void {
    this.store.dispatch(AppActions.selectMovie({ movie }));
  }

  public handleRemoveNominatedMovie(movieId: string): void {
    this.store.dispatch(AppActions.unselectMovie({ movieId }));
  }
}
