import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormDirComponent } from './form-dir/form-dir.component';
import { GetChangeModelComponent } from './get-change-model/get-change-model.component';
import { HttpClientModule }   from '@angular/common/http';
import { HttpServerInteractionComponent } from './http-server-interaction/http-server-interaction.component'
import { ModelValidationComponent } from './model-validation/model-validation.component';
import { ReactiveFormsModule }   from '@angular/forms';
@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
    declarations: [ AppComponent, GetChangeModelComponent, ModelValidationComponent, FormDirComponent,
        FormBuilderComponent, HttpServerInteractionComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }