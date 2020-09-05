import {
  Component,
  OnChanges,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Movie } from "../../../models/omdb.model";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "nomination-panel",
  templateUrl: "./nomination-panel.component.html",
  styleUrls: ["./nomination-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NominationPanelComponent implements OnChanges {
  @Input() nominatedMovies: Movie[];
  @Output() public removeNominatedMovie: EventEmitter<
    string
  > = new EventEmitter();

  public columns: string[] = ["poster", "title", "year", "nomination"];
  public dataSource;

  public ngOnChanges() {
    this.dataSource = new MatTableDataSource<Movie>([...this.nominatedMovies]);
    console.log([...this.nominatedMovies]);
  }
  public handleRemoveClick(movie: Movie): void {
    this.removeNominatedMovie.emit(movie.imdbID);
  }
}
