import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<div>
    <get-sum></get-sum>
    <change-user></change-user>
    </div>`
})
export class AppComponent { 
    name= '';
}