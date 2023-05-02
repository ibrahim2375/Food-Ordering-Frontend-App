import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { UserLogin } from '../shared/interfaces/UserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN, USER_REGISTER } from '../shared/api/api';
import { UserRegister } from '../shared/interfaces/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user_key = 'User';
  user!: User;
  serverError!:string;
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient) {
    this.userObservable = this.userSubject.asObservable();
     //check if there is user or not
    this.userObservable.subscribe( newuser => {
      this.user = newuser;
    })
  }
  //login method
  login(userLogin:UserLogin):Observable<User> {
    return this.http.post<User>(USER_LOGIN, userLogin).pipe(
      tap({
        next: (user) => {
          console.log(user.name);
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          console.log(user + "logged in");
        },
        error: (errorResponse) => {
          console.log(errorResponse.error);
          this.serverError = errorResponse.error;
        }
      })
    );
  }
  //register method
    register(userRegister:UserRegister):Observable<User> {
    return this.http.post<User>(USER_REGISTER, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          console.log(user.email + "registerd successfully");
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      })
    );
  }
  //logout method
  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(this.user_key);
  }
  // save user in local storage
  private setUserToLocalStorage(user:User){
    localStorage.setItem(this.user_key,JSON.stringify(user));
  }
  //get User from local storage
  private getUserFromLocalStorage():User{
    const userSaved = localStorage.getItem(this.user_key);
    if(userSaved) return JSON.parse(userSaved) as User;
    return new User();
  }
  // get current user
  getCurrentUser(): User {
    return this.userSubject.value;
  }
}
