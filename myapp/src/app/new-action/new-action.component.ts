import { Component } from '@angular/core';
import axios from 'axios';
import { StateService } from '../service/shared.service';

@Component({
  selector: 'app-new-action',
  templateUrl: './new-action.component.html',
  styleUrls: ['./new-action.component.scss'],
})
export class NewActionComponent {
  accountNo: number | undefined;
  action: string | undefined;
  amount: number | undefined;
  payments: number | undefined;
  rate: number | undefined;

  constructor(private stateService: StateService) {}

  submitForm(): void {
    const data: any = {
      accountNo: this.accountNo,
      action: this.action,
      amount: this.amount,
      payments: this.payments,
      rate: this.rate,
    };

    
    axios
      .post('http://localhost:8080/new', {
        data,
      })
      .then((response) => {
        alert(response.data);
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  }




}
