import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Movie } from "../../../models/omdb.model";

@Component({
  selector: "result-panel",
  templateUrl: "./result-panel.component.html",
  styleUrls: ["./result-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultPanelComponent implements OnChanges {
  @Input() public movies: Movie[];
  @Input() public nominatedMovies: Movie[];
  @Output() public nominateMovie: EventEmitter<Movie> = new EventEmitter();

  public columns: string[] = ["poster", "title", "year", "nomination"];
  public dataSource;

  public ngOnChanges() {
    this.dataSource = new MatTableDataSource<Movie>(this.movies);
  }

  public handleNominationClick(movie: Movie): void {
    this.nominateMovie.emit(movie);
  }

  public isMovieNominated(movie: Movie): boolean {
    return (
      this.nominatedMovies &&
      this.nominatedMovies.some(
        (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
      )
    );
  }
}
