import { Component, OnInit } from '@angular/core';
import { SamplehotelService } from '../services/samplehotel.service';
import { Hotels } from '../services/hotels';
@Component({
  selector: 'app-residency',
  templateUrl: './residency.component.html',
  styleUrls: ['./residency.component.css'],
  providers: [SamplehotelService]
})
export class ResidencyComponent implements OnInit {

  hotels: Hotels[];
  constructor(private samplehotel: SamplehotelService) { }

  ngOnInit(): void {
    this.hotels = this.samplehotel.getHotels();
  }
  hyphenateUrlParams(str: string) {
    return str.replace(' ', '-');
  }
}
