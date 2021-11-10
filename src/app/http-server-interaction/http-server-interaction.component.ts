import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

import { User } from '../models/user';

@Component({
    selector: 'http-server-interaction',
    templateUrl: './http-server-interaction.component.html',
    providers: [HttpService]
})

export class HttpServerInteractionComponent implements OnInit { 
   
    users: User[]=[];
     
    constructor(public httpService: HttpService){}
      
    ngOnInit(){
        this.httpService.getUsers().subscribe((data: User[]) => this.users=data);
    }
}