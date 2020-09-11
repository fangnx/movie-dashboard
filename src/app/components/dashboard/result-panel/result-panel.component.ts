import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { fromEvent, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";
import { Movie } from "../../../models/omdb.model";

@Component({
  selector: "result-panel",
  templateUrl: "./result-panel.component.html",
  styleUrls: ["./result-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class ResultPanelComponent
  implements OnChanges, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild("searchInput", { static: true }) input: ElementRef;

  @Input() public movies: Movie[];
  @Input() public total: number;
  @Input() public page: number;
  @Input() public nominatedMovies: Movie[];
  @Input() public searchTerm: string;
  @Input() public searchError: string;

  @Output() public enterSearch: EventEmitter<string> = new EventEmitter();
  @Output() public clearSearch: EventEmitter<void> = new EventEmitter();
  @Output() public nominateMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() public changePage: EventEmitter<number> = new EventEmitter();

  public columns: string[] = ["Poster", "Title", "Year", "Nomination"];
  public dataSource;

  private searchDebounceSubscription: Subscription;
  public isTableLoading = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty("movies")) {
      this.dataSource = new MatTableDataSource<Movie>(this.movies);
      this.isTableLoading = false;
    }
  }

  ngAfterViewInit(): void {
    this.searchDebounceSubscription = fromEvent(
      this.input.nativeElement,
      "keyup"
    )
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => {
          this.search(this.searchTerm);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.searchDebounceSubscription.unsubscribe();
  }

  public handleKeydown(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.search(this.searchTerm);
    }
  }

  private search(searchTerm: string): void {
    if (searchTerm.length === 0 || !searchTerm.trim()) {
      this.searchError = "";
      return;
    }
    this.isTableLoading = true;
    this.enterSearch.emit(searchTerm);
  }

  public handleClearSearch(): void {
    this.clearSearch.emit();
  }

  public handlePaginatorChange(event): void {
    if (this.searchTerm.length === 0 || !this.searchTerm.trim()) {
      return;
    }
    this.changePage.emit(event.pageIndex);
  }

  public handleNominationClick(movie: Movie): void {
    this.nominateMovie.emit(movie);
  }

  public canNominate(movie: Movie): boolean {
    return this.nominatedMovies.length < 5 && !this.isMovieNominated(movie);
  }

  private isMovieNominated(movie: Movie): boolean {
    return (
      this.nominatedMovies &&
      this.nominatedMovies.some(
        (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
      )
    );
  }

  public isMoviePosterValid(movie: Movie): boolean {
    return movie.Poster && movie.Poster !== "N/A";
  }

  public getColumnDisplayName(column: string): string {
    return column === "Nomination" ? "" : column;
  }

  public get paginatorIndex(): number {
    return this.page - 1;
  }
}
