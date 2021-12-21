import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor(private element: ElementRef) {
    // let el = this.element.nativeElement;
    // el.setAttribute('style', 'color: white; background: red');
  }
  data = [
    {
      name: 'Sujoy',
      code: 1,
    },
    {
      name: 'Soumick',
      code: 2,
    },
    {
      name: 'Krish',
      code: 3,
    },
    {
      name: 'Rajib Saha',
      code: 4,
    },
  ];
  @ViewChild('student', { read: ElementRef, static: false }) student;
  @ViewChildren('students') students;
  showHide: boolean = true;

  ngOnInit(): void {}

  onClick() {
    // this.student.nativeElement.style.display = 'none';
    this.student.nativeElement.textContent = 'I have changed the text content';
  }

  checkingViewChildren(index: number) {
    console.log(this.students.toArray()[index].nativeElement.textContent);
  }

  onClickShowHide() {
    this.showHide = !this.showHide;
  }
}
