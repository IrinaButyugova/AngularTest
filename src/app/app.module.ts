import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { GetChangeModelComponent } from './get-change-model/get-change-model.component'
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, GetChangeModelComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }