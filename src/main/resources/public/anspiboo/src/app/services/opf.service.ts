import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";

import { Opf } from "../model/opf";
import { MessagesService } from "./messages.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OpfService {

  private opfsUrl = 'http://localhost:8254/opfsapi/'; // URL to web API

  constructor(
    private http: HttpClient,
    private messageService:MessagesService
  ) { }

  /** GET opfs from the server */
  getOPFs(): Observable<Opf[]> {
    return this.http.get<Opf[]>(this.opfsUrl)
      .pipe(
        map((data: any) => {
          return data._embedded.opfs as Opf[];
        }),
        tap( opfs => this.log(`your OPFs has successfully loaded`)),
        catchError(this.handleError('getOPFs', []))
      );
  }

  /** GET opf by id. Will 404 if id not found */
  getOPF(id: number): Observable<Opf> {
    const url = `${this.opfsUrl}/${id}`;
    return this.http.get<Opf>(url).pipe(
      tap(_ => this.log(`fetched OPF n°${id}`)),
      catchError(this.handleError<Opf>(`getOpf id=${id}`))
    );
  }

  /** PUT: update the opf on the server */
  updateOpf(opf: Opf): Observable<any> {
    return this.http.put(this.opfsUrl, opf, httpOptions).pipe(
        tap(_ => this.log(`updated opf id=${opf.id}`)),
        catchError(this.handleError<any>('updateOpf'))
      );
  }

  /** POST: add a new OPF to the server */
  addOpf(opf: Opf): Observable<Opf> {
    return this.http.post<Opf>(this.opfsUrl, opf, httpOptions).pipe(
      tap((opf: Opf) => this.log(`added opf w\ id=${opf.id}`)),
      catchError(this.handleError<Opf>('addOpf'))
    );
  }

  /** DELETE: delete the opf from the server */
  deleteOpf(opf: Opf): Observable<Opf> {
    const id = typeof opf === 'number' ? opf : opf.id;
    const url = `${this.opfsUrl}/${id}`;

    return this.http.delete<Opf>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted opf id=${id}`)),
      catchError(this.handleError<Opf>('deleteOpf'))
    )
  }

  // TODO : fonction de recherche /* GET opfs whose name contains search term */
  // https://angular.io/tutorial/toh-pt6#heroservicesearchheroes

  private log(message: string) {
    this.messageService.add('OpfService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }



  }

}
