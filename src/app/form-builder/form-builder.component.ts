import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
   
@Component({
    selector: 'form-builder',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: './form-builder.component.html'
})

export class FormBuilderComponent { 
   
    myForm : FormGroup;
    constructor(private formBuilder: FormBuilder){
      
        this.myForm = formBuilder.group({
              
            "userName": ["Tom", [Validators.required]],
            "userEmail": ["", [ Validators.required, Validators.email]],
            "phones": formBuilder.array([
                ["+7", Validators.required]
            ])
        });
    }
    getFormsControls() : FormArray{
        return this.myForm.controls['phones'] as FormArray;
    }
    addPhone(){
        (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
    }
    submit(){
        console.log(this.myForm);
    }
}