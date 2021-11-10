import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
  
@Component({
    selector: 'item-info',
    template: `<h3>Модель {{id}}</h3>`
})
export class ItemComponent { 
     
    id: number | undefined;
     
    constructor(private route: ActivatedRoute){}

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap(params => params.getAll('id'))
        )
        .subscribe(data=> this.id = +data);
      }
}