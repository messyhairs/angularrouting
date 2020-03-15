import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SamplehotelService } from '../services/samplehotel.service';
import { Hotels } from '../services/hotels';

@Component({
  selector: 'app-residencydetails',
  templateUrl: './residencydetails.component.html',
  styleUrls: ['./residencydetails.component.css'],
  providers: [SamplehotelService]
})
export class ResidencydetailsComponent implements OnInit {
  public hotels: Hotels;
  public id;
  public name;
  public price;
  public subscribeddatas;
  constructor(private metatags: Meta, private titles: Title,
              private samplehotel: SamplehotelService, private router: Router, private actirouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeddatas = this.actirouter.paramMap.subscribe(params => {
      console.log(params);
      this.id = this.actirouter.snapshot.paramMap.get('id');
      const products = this.samplehotel.getHotels();
      this.hotels = products.find(p => p.hotelID == this.id);
      this.titles.setTitle(this.hotels.name);
    });
  }
  ngOnDestroy() {
    this.subscribeddatas.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['residency']);
    this.subscribeddatas.unsubscribe();
  }
}
