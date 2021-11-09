import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
    selector: 'form-dir',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: './form-dir.component.html'
})

export class FormDirComponent { 
 
    name: string = "";
    email: string = "";
    phone: string = "";
     
    onSubmit(form: NgForm){
        console.log(form);
    }
}