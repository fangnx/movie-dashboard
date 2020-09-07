import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Movie } from "../../../models/omdb.model";

@Component({
  selector: "result-panel",
  templateUrl: "./result-panel.component.html",
  styleUrls: ["./result-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultPanelComponent implements OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() public movies: Movie[];
  @Input() public total: number;
  @Input() public page: number;
  @Input() public nominatedMovies: Movie[];
  @Input() public searchTerm: string;

  @Output() public enterSearch: EventEmitter<string> = new EventEmitter();
  @Output() public clearSearch: EventEmitter<void> = new EventEmitter();
  @Output() public nominateMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() public changePage: EventEmitter<number> = new EventEmitter();

  public columns: string[] = ["poster", "title", "year", "nomination"];
  public dataSource;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Movie>(this.movies);
  }

  public handleKeydown(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.handleSearch();
    }
  }

  public handleSearch(): void {
    this.enterSearch.emit(this.searchTerm);
  }

  public handleClearSearch(): void {
    this.clearSearch.emit();
  }

  public handlePaginatorChange(event): void {
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

  public get paginatorIndex(): number {
    return this.page - 1;
  }
}
