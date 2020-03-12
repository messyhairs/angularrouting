import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  categories = [{
    name: 'hotel',
    id: 1,
    blocks: [{
      name: 'karnataka',
    },
    {
      name: 'TamilNadu'

    }]
  },
  {
    name: 'Ticket',
    id: 2,
    blocks: [{
      name: 'Airways',
    },
    {
      name: 'Roadways'

    },
    {
      name: 'Railways'
    }]
  }];
  places: { name: string; }[];
  constructor(private titleService: Title, private metaTagService: Meta, private router: Router, private routes: ActivatedRoute) { }
  ngOnInit() {
    this.titleService.setTitle('chooseproperty');
  }
  chooseproperty(event) {
    if (event) {
      this.titleService.setTitle(event.target.name);
      if (event.target.name) {
        this.categories.forEach(element => {
          if (element.name === event.target.name) {
            this.places = element.blocks;
          }
        });
        console.log(this.places);
        console.log(this.router.url + '/' + event.target.name);
        this.routes.paramMap.subscribe(params => {
        console.log(params.get(event.target.name));
        });
      }
    }
  }
}
