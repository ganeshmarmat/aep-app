import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//where to store this const
const AUTH_API = 'http://deverp.ayaantech.in';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, passcode: string): Observable<any> {
    debugger;
    //return this.http.get('http://deverp.ayaantech.in/api/ERPMApprovalStatus/GetAll');
    return this.http.post(AUTH_API + '/api/Login/Login', {
      username,
      passcode
    }, httpOptions);
  }

 
}
