import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-whowe',
  templateUrl: './whowe.component.html',
  styleUrls: ['./whowe.component.css']
})
export class WhoweComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

}
