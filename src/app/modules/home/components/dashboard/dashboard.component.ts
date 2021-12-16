import { Component, OnInit } from '@angular/core';
import { InboxItem } from '../../models/inbox.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  inboxData: InboxItem[];
  name: string = 'rajib';
  surName: string = 'saha';
  constructor() {}

  ngOnInit(): void {}

  getChildData(event: any) {
    if (event) {
      localStorage.setItem('name', this.name);
      sessionStorage.setItem('surName', this.surName);
      this.inboxData = [
        {
          vin: 2334234,
          year: 2021,
          brand: 'BMW',
          color: 'red',
        },
        {
          vin: 54645645,
          year: 2016,
          brand: 'Audi',
          color: 'black',
        },
      ];
    }
  }
}
