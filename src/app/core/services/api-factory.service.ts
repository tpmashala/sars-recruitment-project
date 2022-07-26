import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class ApiFactoryService {
  readonly ROOT_URL;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8086/sars-recruitement-service';
  }

  setOptions() {
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      'emp-new-key-auth-token'
    );
  }
  findOne<T>(uri: string) {
    return this.http
      .get<T>(`${this.ROOT_URL}/${uri}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  findAll<T>(uri: string) {
    return this.http
      .get<T>(`${this.ROOT_URL}/${uri}`, this.httpOptions)
      .pipe(retry(3), catchError(this.handleError));
  }

  patch<T>(uri: string, payload: Object) {
    return this.http
      .patch<T>(`${this.ROOT_URL}/${uri}`, payload, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  post<T>(uri: string, payload: Object) {
    return this.http
      .post<T>(`${this.ROOT_URL}/${uri}`, payload, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  delete<T>(uri: string) {
    return this.http
      .delete<T>(`${this.ROOT_URL}/${uri}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('A network error happened :', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'There was an error while attempting to fetch the relevant data; please try again later.'
    );
  }
}
