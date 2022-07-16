import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CustomAuthService } from 'src/app/erp-services/auth/custom-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServices {

  _apiURL: string = '';
  _numberOfRetry: number = 0;
  _http: HttpClient;
  _path:string ='';

  _httpHeader = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.service.GetLocalTokenStorage()
      })
  }
  constructor(http: HttpClient, private service: CustomAuthService) {
    this._http = http;
    //TODO
    this._apiURL = '';//environment.apiUrl;
    this._numberOfRetry =1; //environment.numberOfRetry;
  }
  getAll<T>(virtualPath: string): Observable<T[]> {
    this._path = this.apiPathFormat(this._apiURL, virtualPath);
    return this._http.get<T[]>(this._path, this._httpHeader)
      .pipe(retry(this._numberOfRetry), catchError(this.httpError));
  }
  getById<T>(virtualPath: string, id: string |number): Observable<T> {
    return this._http.get<T>(this.apiPathFormat(this._apiURL, virtualPath, true) + id, this._httpHeader)
      .pipe(retry(this._numberOfRetry), catchError(this.httpError));
  }
  postData<T>(virtualPath: string, t: T): Observable<T> {
    return this._http.post<T>(this.apiPathFormat(this._apiURL, virtualPath), JSON.stringify(t), this._httpHeader)
      .pipe(retry(this._numberOfRetry), catchError(this.httpError));
  }
  postDataParameter<INP, OUTP>(virtualPath: string, t: INP): Observable<OUTP> {
   this._path = this.apiPathFormat(this._apiURL, virtualPath);
   console.log(this._path);
    return this._http.post<OUTP>(this._path, JSON.stringify(t), this._httpHeader)
     .pipe(retry(this._numberOfRetry), catchError(this.httpError));
  }
  putData<T>(virtualPath: string, id: string | number, changes: Partial<T>): Observable<T> {
    return this._http.put<T>(this.apiPathFormat(this._apiURL, virtualPath, true) + id, JSON.stringify(changes), this._httpHeader)
      .pipe(retry(this._numberOfRetry), catchError(this.httpError));
  }
  deleteData(virtualPath: string, id: string | number): Observable<any> {
    return this._http.delete(this.apiPathFormat(this._apiURL, virtualPath, true) + id, this._httpHeader)
      .pipe(retry(this._numberOfRetry), catchError(this.httpError));
  }

  apiPathFormat(apiURL: string, virtualPath: string, isId: boolean = false): string {
    if (isId) {
      return apiURL + virtualPath + "/";
    }
    else {
      return apiURL + virtualPath + "";
    }

  }

  httpError(error:any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
