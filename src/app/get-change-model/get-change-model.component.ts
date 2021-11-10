import { Component} from '@angular/core';
import { NgModel } from '@angular/forms';
import {Observable} from "rxjs";

import {ComponentCanDeactivate} from '../guards/can-deactivate.guard';
 
export class Phone{
    constructor(public title: string, 
                public price: number, 
                public company: string)
    { }
}

@Component({
    selector: 'get-change-model',
    templateUrl: './get-change-model.component.html'
})

export class GetChangeModelComponent implements ComponentCanDeactivate{
    phone: Phone = new Phone("", 0, "");
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
    saved: boolean = false;

    addPhone(title:NgModel, price: NgModel, comp: NgModel){
        console.log(title);
        console.log(price);
        console.log(comp);
    } 

    onTitleChange(){
        if(this.phone.title=="нет")
            this.phone.title = "неизвестно";
    }

    save(){
        this.saved = true;
    }
     
    canDeactivate() : boolean | Observable<boolean>{
        if(!this.saved){
            return confirm("Вы хотите покинуть страницу?");
        }
        else{
            return true;
        }
    }
}
