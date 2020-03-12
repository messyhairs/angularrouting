import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { WhoweComponent } from './whowe/whowe.component';
import { WedoComponent } from './wedo/wedo.component';
import { WehaveComponent } from './wehave/wehave.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [{
      path: 'wedo',
      component: WedoComponent
    },
    {
      path: 'wehave/:id',
      component: WehaveComponent
    },
    {
      path: 'whowe',
      component: WhoweComponent
    }]
  },
  {
    path: 'dashboard/:userdetails',
    component: DashboardComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
