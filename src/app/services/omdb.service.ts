import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { environment } from "../../environments/environment";
import { SearchResponse, SearchType, Movie } from "../models/omdb.model";

@Injectable()
export class OmdbService {
  private apiUri: string = "https://www.omdbapi.com/";

  constructor(private httpClient: HttpClient) {}

  public searchForTitle(
    searchTerm: string,
    page: number = 1
  ): Observable<SearchResponse> {
    let params = new HttpParams();
    params = params.append("apikey", environment.omdbApiKey);
    params = params.append("type", SearchType.movie);
    params = params.append("s", searchTerm);
    params = params.append("page", `${page}`);

    return this.httpClient.get<SearchResponse>(this.apiUri, { params });
  }

  public searchById(id: string): Observable<Movie> {
    let params = new HttpParams();
    params = params.append("apikey", environment.omdbApiKey);
    params = params.append("i", id);

    return this.httpClient.get<Movie>(this.apiUri, { params });
  }

  public searchByIds(ids: string[]): Observable<Movie[]> {
    return forkJoin(ids.map((id) => this.searchById(id)));
  }
}
