import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { City } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedCity: City = { name: 'Rome', code: 'RM' };
  show: boolean = true;
  name: string = '';
  surName: string = '';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    console.log(this.homeService.abc);
    // this.cities = [
    //   { name: 'New York', code: 'NY' },
    //   { name: 'Rome', code: 'RM' },
    //   { name: 'London', code: 'LDN' },
    //   { name: 'Istanbul', code: 'IST' },
    //   { name: 'Paris', code: 'PRS' },
    // ];

    this.name = localStorage.getItem('name');
    this.surName = sessionStorage.getItem('surName');
  }

  onChangeDropdown(event: any) {
    console.log(this.selectedCity);
    this.show = false;
  }
}
