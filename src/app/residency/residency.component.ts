import { Component, OnInit } from '@angular/core';
import { SamplehotelService } from '../services/samplehotel.service';
import { Title, Meta } from '@angular/platform-browser';
import { Hotels } from '../services/hotels';
@Component({
  selector: 'app-residency',
  templateUrl: './residency.component.html',
  styleUrls: ['./residency.component.css'],
  providers: [SamplehotelService]
})
export class ResidencyComponent implements OnInit {

  hotels: Hotels[];
  constructor(private samplehotel: SamplehotelService, private metatags: Meta, private titles: Title) { }

  ngOnInit(): void {
    this.hotels = this.samplehotel.getHotels();
    this.titles.setTitle('hotels in your location');
  }
  hyphenateUrlParams(str: string) {
    return str.replace(' ', '-');
  }
}
