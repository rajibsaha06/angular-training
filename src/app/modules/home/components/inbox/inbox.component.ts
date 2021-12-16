import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InboxItem } from '../../models/inbox.interface';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  @Input() cars: InboxItem[] = [];
  @Output() clickEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    this.clickEvent.emit(true);
  }
}
