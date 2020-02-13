import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }
  // tslint:disable-next-line:max-line-length
  private  headers: HttpHeaders = new HttpHeaders({Authorization: 'Bearer BQAuBI8bOye2cG0OOJmQNgXGUDeRVW42iGmkzEPop4cFFSaTDz8--5KTHUS_O1IQ6iMBuCgTK-CiaDvuyiU'});

  private getQuery(query: string): Observable<any> {
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers : this.headers });
  }

  getRelases(): Observable<any> {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data.albums.items ));
  }

  getArtists(termino: string): Observable<any> {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map(data => data.artists.items ));
  }

  getArtist(id: string) {
    return this.getQuery( `artists/${id}`);
  }

}
