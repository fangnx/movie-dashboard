import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { SearchResponse, SearchType } from "../models/omdb.model";

@Injectable()
export class OmdbService {
  private apiUri: string = "http://www.omdbapi.com/";

  constructor(private httpClient: HttpClient) {}

  public searchForTitle(
    searchTerm: string,
    page: number = 1
  ): Observable<SearchResponse> {
    console.log(searchTerm + " " + page);
    let params = new HttpParams();
    params = params.append("apikey", environment.omdbApiKey);
    params = params.append("type", SearchType.movie);
    params = params.append("s", searchTerm);
    params = params.append("page", `${page}`);

    return this.httpClient
      .get<SearchResponse>(this.apiUri, { params })
      .pipe(map((res) => res));
  }
}
