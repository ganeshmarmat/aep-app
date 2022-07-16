import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomAuthService } from '../../auth/custom-auth.service';
//where to store this const
const AUTH_API = 'http://deverp.ayaantech.in';
// const token = localStorage.getItem(this.local_tokenValue);
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestProgressService {
  constructor(private http: HttpClient, private token:CustomAuthService) { }

  getPurchaseRequestProgress(): Observable<any> {
    return this.http.get(AUTH_API + '/api/ERPMApprovalStatus/GetAll');
  }
  
 
}
