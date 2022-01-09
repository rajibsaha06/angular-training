import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ContactPageComponent,
    ContactFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactPageComponent,
      },
      {
        path: 'form',
        component: ContactFormComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
      },
    ]),
  ],
})
export class ContactModule {}
