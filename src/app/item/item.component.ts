import { Component} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
  
@Component({
    selector: 'item-info',
    template: `<h3>Модель {{id}}</h3>
    <div>Товар: {{product}}</div>
    <div>Цена: {{price}}</div>
    <router-outlet></router-outlet>`
})
export class ItemComponent { 
     
    id: any;
    product: any;
    price: any;
     
    constructor(private route: ActivatedRoute){}

    ngOnInit() {
        this.route.paramMap
        .subscribe((data: ParamMap) => this.id = +data.getAll('id'));

        this.route.queryParamMap
        .subscribe((data: ParamMap) => {
            this.product = data.getAll('product');
            this.price = data.getAll('price');
        });
      }
}