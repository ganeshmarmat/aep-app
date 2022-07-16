import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { user } from '../erp-models/login/login.model';
import { CustomAuthService } from '../erp-services/auth/custom-auth.service';
import { AuthService } from '../erp-services/login/login.service';
import { TokenStorageService } from '../erp-services/token-storage/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: CustomAuthService,public router: Router,) { }

  ngOnInit(): void {
    if (this.tokenStorage.GetLocalTokenStorage()) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/dashboard');
      //this.roles = this.tokenStorage.GetLocalUserNameStorage().roles;
    }
  }

  onSubmit(): void {
    //test login
    /*
    var data=new user();
    data.name="r_mart_erp";
    data.password="**";
   var d= "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiUl9NQVJUX0VSUCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkNvbXBhbnkgU3VwZXIgQWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjNlMTBlMjAzLTVmZTItNDQwOS04ODgzLWI2YTg1ZmY5N2I1ZCIsImV4cCI6MTY1Njk1MzMwOCwiaXNzIjoid3d3LmxvY2FsaG9zdC5uZXQiLCJhdWQiOiJ3d3cubG9jYWxob3N0Lm5ldCJ9.2TEuSFyjWi_HwMHuU9pl-Tzkrq3N1qnjb2V3xf_ERsU";
   this.tokenStorage.SetLocalTokenStorage(d);
   this.tokenStorage.SetLocalUserNameStorage(data.name);
   this.isLoginFailed = false;
   this.isLoggedIn = true;
   
   this.reloadPage();
   return;*/
   
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        //console.log(data);
        //alert(data.accessToken);
        debugger;
        this.tokenStorage.SetLocalTokenStorage(data.token);
        this.tokenStorage.SetLocalUserNameStorage(data.userName);
        //this.tokenStorage.saveToken(data.accessToken);
       //this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //his.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        console.log(err);
        debugger;
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
    
  }

  reloadPage(): void {
    window.location.reload();
  }
}
