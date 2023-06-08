import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  get(url: string) {
    const headers = { 'Access-Control-Allow-Origin': '*' };
    return this.http.get(url, { withCredentials: true, headers: headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        return [error];
      })
    );
  }
}
