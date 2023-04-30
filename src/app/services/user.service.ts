import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { UserLogin } from '../shared/interfaces/UserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN } from '../shared/api/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }
  login(userLogin:UserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN, userLogin).pipe(
      tap({
        next: (user) =>{

        },
        error: (errorResponse) => {

        }
      })
    );
  }
}
