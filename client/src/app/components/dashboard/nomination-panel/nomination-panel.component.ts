import {
  Component,
  OnChanges,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { Movie } from "../../../models/omdb.model";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { ClipboardHelper } from "../../helpers/clipboard.helper";

@Component({
  selector: "nomination-panel",
  templateUrl: "./nomination-panel.component.html",
  styleUrls: ["./nomination-panel.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NominationPanelComponent implements OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() nominatedMovies: Movie[];
  @Output() public removeNominatedMovie: EventEmitter<
    string
  > = new EventEmitter();

  public columns: string[] = ["poster", "title", "year", "nomination"];
  public dataSource;

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Movie>([...this.nominatedMovies]);
  }

  public handleRemoveClick(movie: Movie): void {
    this.removeNominatedMovie.emit(movie.imdbID);
  }

  public get progressBarValue(): number {
    return (this.nominatedMovies.length / 5) * 100;
  }

  public handleShareClick(): void {
    ClipboardHelper.copyToClipboard(window.location.toString());
  }
}
