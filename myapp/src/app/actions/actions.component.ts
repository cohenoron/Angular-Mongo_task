import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../service/shared.service';
import axios from 'axios';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  actions: any;
  accountNo: number | undefined;

  constructor(private http: HttpClient, public stateService: StateService) {}

  ngOnInit() {}

  submitAccounNumber(): void {
    const data: any = {
      accountNo: this.accountNo,
    };

    axios
      .post('http://localhost:8080/find', {
        data,
      })
      .then((response) => {
        this.actions = response.data;
        console.log(this.actions);
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  }
}
