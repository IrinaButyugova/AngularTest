import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NewUser} from '../models/new-user';
     
@Injectable()
export class UserService{
     
    private url = "http://localhost:3000/api/users";
    constructor(private http: HttpClient){ }
        
    getUsers(){
        return this.http.get<Array<NewUser>>(this.url);
    }
    
    createUser(user: NewUser){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<NewUser>(this.url, JSON.stringify(user), {headers: myHeaders}); 
    }

    updateUser(user: NewUser) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<NewUser>(this.url, JSON.stringify(user), {headers:myHeaders});
    }

    deleteUser(id: string){ 
        return this.http.delete<NewUser>(this.url + '/' + id);
    }
}