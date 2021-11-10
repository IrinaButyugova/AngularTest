import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import {User} from '../models/user'
  
@Injectable()
export class HttpService{

    errorMessage: String = "";

    constructor(private http: HttpClient){ }
      
    getUsers() : Observable<User[]> {
        return this.http.get('assets/users.json').pipe(map((data:any)=>{
            let usersList = data["userList"];
            return usersList.map(function(user: any): User {
                return new User(user.userName, user.userAge);
              });
        }),
        catchError(err => {  
            console.log(err); 
            this.errorMessage = err.message;
            return [];
        }))
    };

    getSum(num1: number, num2: number){
        const params = new HttpParams()
        .set('num1', num1.toString())
        .set('num2', num2.toString());
        return this.http.get('http://localhost:3000/sum', {params});
    }

    postData(user: User){
        return this.http.post('http://localhost:3000/postuser', user); 
    }
}