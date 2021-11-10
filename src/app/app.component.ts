import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles:[` 
    .nav{ clear: both;}
    a {float: left;}
    .active a { color: red;}
`]
})
export class AppComponent { 
    name= '';
}