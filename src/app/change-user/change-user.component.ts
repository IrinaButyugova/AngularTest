import { Component } from '@angular/core';

import { HttpService } from '../services/http.service';
import { User } from '../models/user';

@Component({
    selector: 'change-user',
    templateUrl: './change-user.component.html',
    providers: [HttpService]
})

export class ChangeUserComponent {
    user: User=new User("", 0);
       
    receivedUser: User | undefined;
    done: boolean = false;

    constructor(private httpService: HttpService){}
    
    submit(user: User){
        this.httpService.postData(user)
                .subscribe(
                    (data: any) => {this.receivedUser=data; this.done=true;},
                    error => console.log(error)
                );
    }
}