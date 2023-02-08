import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class StateService {
  actions = new BehaviorSubject<any>([]);
  currentActions = this.actions.asObservable();
  response: any;
  data: any;

  constructor(private http: HttpClient) {}

  changeActions(value: any) {
    this.actions.next(value);
  }

  getActions() {
    this.http.get('http://localhost:8080/actions').subscribe((data) => {
      this.changeActions(data);
    });
  }
}
