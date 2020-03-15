import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { WhoweComponent } from './whowe/whowe.component';
import { WedoComponent } from './wedo/wedo.component';
import { WehaveComponent } from './wehave/wehave.component';
import { HotelComponent } from './hotel/hotel.component';
import { JourneyComponent } from './journey/journey.component';
import { FilterPipe } from './filter.pipe';
import { ResidencyComponent } from './residency/residency.component';
import { ResidencydetailsComponent } from './residencydetails/residencydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    BookingComponent,
    WhoweComponent,
    WedoComponent,
    WehaveComponent,
    HotelComponent,
    JourneyComponent,
    FilterPipe,
    ResidencyComponent,
    ResidencydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
