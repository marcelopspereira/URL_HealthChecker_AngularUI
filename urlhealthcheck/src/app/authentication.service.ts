import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { User } from './model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  firstName:string='Guest';
  password:string='password';
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpClient:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
     }


     public get currentUserValue():User
     {
        return this.currentUserSubject.value;
     }

     authenticate(username:string, password:string) {
      console.log("kkkk");
      return this.httpClient.put<User>('http://demo8803816.mockable.io/login',{}).pipe(
       map(
         userData => {
           console.log(JSON.stringify(userData));
          sessionStorage.setItem('user',JSON.stringify(userData));
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          this.firstName=userData.firstname;
          this.currentUserSubject.next(userData);
          return userData;
         }
       )
      );
    }

    isUserLoggedIn() {
      let user = JSON.parse(sessionStorage.getItem('user'));

      //console.log(!(user === null))
      return !(user === null)
    }

    logOut() {
      sessionStorage.removeItem('user');
      this.firstName="Guest";
      this.currentUserSubject.next(null);
    }

}
