import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InboxItem } from '../../models/inbox.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // providers: [HomeService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  inboxData: InboxItem[];
  name: string = 'rajib';
  surName: string = 'saha';
  private subscription: Subscription = new Subscription();
  posts: any;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.abc = 1;
    this.getPosts();
  }

  getPosts() {
    this.subscription.add(
      this.homeService.getPosts().subscribe((res) => {
        if (res) {
          this.posts = res;
        }
      })
    );
  }

  getUserDetails() {
    this.subscription.add(
      this.homeService.getUserDetails('123').subscribe(
        (res) => {
          if (res) {
            console.log(res);
          }
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

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
