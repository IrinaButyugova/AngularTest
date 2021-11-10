import { Component} from '@angular/core';
import { HttpService} from '../services/http.service';

@Component({
    selector: 'get-sum',
    templateUrl: './get-sum.component.html',
    providers: [HttpService]
})

export class GetSumComponent {
    num1: number = 0;
    num2: number = 0;
    sum: number | undefined;
    done: boolean = false;

    constructor(private httpService: HttpService){}

    submit(){
        this.httpService.getSum(this.num1, this.num2).subscribe((data:any) => {
            this.sum=data.result; 
            this.done=true;
        });
    }
}