import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FormDirComponent } from './form-dir/form-dir.component';
import { GetChangeModelComponent } from './get-change-model/get-change-model.component';
import { ModelValidationComponent } from './model-validation/model-validation.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, GetChangeModelComponent, ModelValidationComponent, FormDirComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }