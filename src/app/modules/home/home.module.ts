import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [DashboardComponent, InboxComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
  ],
})
export class HomeModule {}
