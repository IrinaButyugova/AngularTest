import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { User } from './user';

@Component({
    selector: 'http-server-interaction',
    templateUrl: './http-server-interaction.component.html',
    providers: [HttpService]
})

export class HttpServerInteractionComponent implements OnInit { 
   
    users: User[]=[];
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
        this.httpService.getData().subscribe((data: any) => this.users=data["userList"]);
    }
}