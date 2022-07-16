import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,ActivatedRoute, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomAuthService } from './erp-services/auth/custom-auth.service';
//import { M_UserVO } from '../app/_models/masters/user';

@Injectable({
  providedIn: 'root'
})
export class CustomAuthGuard implements CanActivate {
  _token:string|undefined;
  constructor(
    //public userVO: M_UserVO,
    private route: ActivatedRoute,
    public router: Router,
    public authService: CustomAuthService
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
debugger;
      this._token = this.authService.GetLocalTokenStorage();
     console.log(this._token);
      if(this._token == undefined || this._token == null || this._token.length <= 0) {
        //window.alert('Access Denied, Login is Required to Access This Page!')
        const returnUrl =
        this.route.snapshot.queryParams['returnUrl'] || '/login';
        this.router.navigateByUrl(returnUrl);
      }
      return true;
  }

}
