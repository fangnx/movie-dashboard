import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Movie, SearchResponse, SearchType } from "../models/omdb.model";
import { map } from "rxjs/operators";

@Injectable()
export class OmdbService {
  private apiUri: string = "http://www.omdbapi.com/";

  constructor(private httpClient: HttpClient) {}

  public searchForTitle(searchValue: string) {
    let params = new HttpParams();
    params = params.append("apikey", environment.omdbApiKey);
    params = params.append("type", SearchType.movie);
    params = params.append("s", searchValue);

    return this.httpClient
      .get<SearchResponse>(this.apiUri, { params })
      .pipe(map((res) => res.Search));
  }
}
