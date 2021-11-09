import { Component} from '@angular/core';
        
export class User{
    constructor(public name: string,
        public email: string,
        public phone: string){}
}
  
@Component({
    selector: 'model-validation',
    styles: [`
    input.ng-touched.ng-invalid {border:solid red 2px;}
    input.ng-touched.ng-valid {border:solid green 2px;}
`],
    templateUrl: './model-validation.component.html'
})

export class ModelValidationComponent { 
  
    user: User = new User("", "", "");
    addUser(){
        console.log(this.user);
    }
}