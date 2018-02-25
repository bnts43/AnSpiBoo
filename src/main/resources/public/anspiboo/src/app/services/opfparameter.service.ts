import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap, mapTo } from "rxjs/operators";

import { MessagesService } from "./messages.service";
import {Opfparameter} from "../model/opfparameter";
import {OpfService} from "./opf.service";
import {Opf} from "../model/opf";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OpfparameterService {

  private opfParameterUrl = 'http://localhost:8254/opfparameterapi'; // URL to web API
  private opfPSearched: Observable<Opfparameter>;
  private opfPSearchedId: Observable<number>;

  constructor(
    private http: HttpClient,
    private messageService: MessagesService,
    private opfService: OpfService,
  ) { }

  /** GET opfParameterId for OpfId. Will 404 if id not found
   *  will be useful for displaying link to opfparameter on opf's listing */
  getOPFParameterId(opfId: number): Observable<number> {
    const url = `${this.opfParameterUrl}/search/findByOpf?opfId=${opfId}`;
    this.opfPSearched = this.http.get<Opfparameter>(url).pipe(
      tap(_ => this.log(`fetched OPFparameter for OPF id=${opfId}`)),
      catchError(this.handleError<Opfparameter>(`getOPFparameter for OPF id=${opfId}`))
    );
    this.opfPSearched.pipe(
      mapTo( data => this.opfPSearchedId = data.id)
    );
    return this.opfPSearchedId;
  }

  /** GET opfParameter by OpfId. Will 404 if id not found */
  getOPFparameter(opfId: number): Observable<Opfparameter> {
    const url = `${this.opfParameterUrl}/search/findByOpf?opfId=${opfId}`;
    return this.http.get<Opfparameter>(url).pipe(
      tap(_ => this.log(`fetched OPFparameter for OPF id=${opfId}`)),
      catchError(this.handleError<Opfparameter>(`getOPFparameter for OPF id=${opfId}`))
    );
  }

  /** PUT: update the Opfparameter on the server */
  updateOpfParameter(opfParameter: Opfparameter) {
    return this.http.put(this.opfParameterUrl, opfParameter, httpOptions)
      .pipe(
        tap(_ => this.log(`updated opf id=${opfParameter.id}`)),
        catchError(this.handleError<any>('updateOpfParameter'))
      );
  }

  /** POST: add a new Opfparameter to the server */
  addOpfParameter(opfParameter: Opfparameter): Observable<Opfparameter> {
    return this.http.post<Opfparameter>(this.opfParameterUrl, opfParameter, httpOptions).pipe(
      tap((opfParameter: Opfparameter) => this.log(`added opfParameter w\ id=${opfParameter.id}`)),
      catchError(this.handleError<Opfparameter>('addOpfParameter'))
    );
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
