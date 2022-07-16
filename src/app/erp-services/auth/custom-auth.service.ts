import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomAuthService {
  STORAGE_KEY = 'local_tokenValue';
  STORAGE_UserName_Key = 'local_userNameValue';

  constructor() {

  }
  SetLocalTokenStorage(token:string){
    localStorage.setItem(this.STORAGE_KEY, token);
    //this.storage.set(this.STORAGE_KEY, token);
  }
  SetLocalUserNameStorage(userName:string){
    localStorage.setItem(this.STORAGE_UserName_Key, userName);
    //this.storage.set(this.STORAGE_UserName_Key, userName);
  }
  RemoveLocalStorage(){
    localStorage.removeItem(this.STORAGE_UserName_Key);
    localStorage.removeItem(this.STORAGE_KEY);
    //this.storage.delete(this.STORAGE_KEY);
    //this.storage.delete(this.STORAGE_UserName_Key);
  }
  GetLocalTokenStorage() :string{
   var _token = localStorage.getItem(this.STORAGE_KEY);
    if(_token == undefined || _token == null){
      return "";
    }
    else{
      return _token;
    }
  }
  GetLocalUserNameStorage(): string{
    var _userName = localStorage.getItem(this.STORAGE_UserName_Key);
    if(_userName == undefined || _userName == null){
      return "";
    }
    else{
      return _userName;
    }
  }

}
