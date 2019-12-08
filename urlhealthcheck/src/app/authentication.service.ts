import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  username:string='Guest';
  password:string='password';
  constructor(private httpClient:HttpClient) { 

     }
     authenticate(username, password) {
      console.log("kkkk");
      return this.httpClient.get<any>('http://www.mocky.io/v2/5debc4252f0000560007e302').pipe(
       map(
         userData => {
           console.log(userData);
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          this.username=username;
          return userData;
         }
       )
      );
    }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('username')
      //console.log(!(user === null))
      return !(user === null)
    }
    logOut() {
      sessionStorage.removeItem('username');
      this.username="Guest";
    }

}
