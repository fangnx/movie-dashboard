import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../state/app.reducer";
import * as AppActions from "src/app/state/app.actions";
import { selectMovies, selectNominatedMovies } from "../../state/app.selector";
import { map } from "rxjs/operators";
import { Movie } from "../../models/omdb.model";
import { Observable } from "rxjs";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public searchValue: string;

  public movies$: Observable<Movie[]>;
  public nominatedMovies$: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.movies$ = this.store
      .select((state) => selectMovies(state))
      .pipe(
        map((movies) => {
          console.log(movies);
          return movies;
        })
      );

    this.nominatedMovies$ = this.store
      .select((state) => selectNominatedMovies(state))
      .pipe(
        map((movies) => {
          console.log(movies);
          return movies;
        })
      );
  }

  public async handleKeydown(event: KeyboardEvent): Promise<void> {
    if (event.key == "Enter") {
      this.store.dispatch(
        AppActions.searchForMovies({ searchValue: this.searchValue })
      );
    }
  }

  public async handleNominateMovie(movie: Movie): Promise<void> {
    this.store.dispatch(AppActions.selectMovie({ movie }));
  }

  public async handleRemoveNominatedMovie(movieId: string): Promise<void> {
    this.store.dispatch(AppActions.unselectMovie({ movieId }));
  }

  public handleButtonClick(): void {
    this.searchValue = "";
  }
}
