import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, forkJoin, Observable, of, Subscription } from 'rxjs';
import { InboxItem } from '../../models/inbox.interface';
import { HomeService } from '../../services/home.service';
import { catchError, finalize, map, mergeMap, tap } from 'rxjs/operators';
import { Advice } from '../../models/home.interface';

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
  posts$: Observable<any>;
  advices$: Observable<Advice>;
  loader: boolean = false;
  advices2$: Observable<Advice[]>;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.abc = 1;
    this.getPosts();
    this.getData();
    this.getData2();
  }

  getData() {
    this.advices$ = this.homeService.getAdvices().pipe(
      mergeMap((res) => this.homeService.getAdviceById(res?.slip?.id)),
      map((result) => result?.slip),
      catchError((err) => of(null))
    );
  }

  getData2() {
    // this.advices2$ = forkJoin([
    //   this.homeService.getAdvices(),
    //   this.homeService.getAdviceById(125),
    // ]).pipe(
    //   map((result) => {
    //     return result?.map((data) => data?.slip);
    //   }),
    //   catchError((err) => of(null))
    // );

    this.loader = true;
    this.advices2$ = combineLatest([
      this.homeService.getAdvices(),
      this.homeService.getAdviceById(125),
    ]).pipe(
      tap(() => (this.loader = false)),
      map((result) => {
        return result?.map((data) => data?.slip);
      }),
      catchError((err) => of(null))
    );
  }

  getPosts() {
    this.posts$ = this.homeService.getPosts().pipe(
      map((res) => res?.data),
      catchError((err) => of([]))
    );
  }

  // Normal programming
  // getPosts() {
  //   this.subscription.add(
  //     this.homeService.getPosts().subscribe((res) => {
  //       if (res) {
  //         this.posts = res;
  //       }
  //     })
  //   );
  // }

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
