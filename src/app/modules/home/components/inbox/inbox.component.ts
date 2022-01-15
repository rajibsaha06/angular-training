import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { InboxItem } from '../../models/inbox.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit, OnDestroy {
  @Input() cars: InboxItem[] = [];
  @Output() clickEvent = new EventEmitter<boolean>();
  subscription: Subscription = new Subscription();
  buttonClick$: Observable<boolean>;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    // this.subscription.add(
    //   this.homeService.subjectExample$.subscribe((res) => {
    //     console.log(res);
    //   })
    // );
    this.buttonClick$ = this.homeService.subjectExample$.pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    );
  }

  buttonClick() {
    this.clickEvent.emit(true);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
