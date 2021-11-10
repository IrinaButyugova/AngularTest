import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChangeUserComponent } from './change-user/change-user.component'; 
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormDirComponent } from './form-dir/form-dir.component';
import { GetChangeModelComponent } from './get-change-model/get-change-model.component';
import { GetSumComponent } from './get-sum/get-sum.component';
import { HttpServerInteractionComponent } from './http-server-interaction/http-server-interaction.component'
import { ModelValidationComponent } from './model-validation/model-validation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [ AppComponent, ChangeUserComponent, GetChangeModelComponent, 
        GetSumComponent, ModelValidationComponent, FormDirComponent, FormBuilderComponent, 
        HttpServerInteractionComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }