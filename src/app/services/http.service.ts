import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

import {User} from '../models/user'
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getUsers() : Observable<User[]> {
        return this.http.get('assets/users.json').pipe(map((data:any)=>{
            let usersList = data["userList"];
            return usersList.map(function(user: any): User {
                return new User(user.userName, user.userAge);
              });
        }));
    }
}