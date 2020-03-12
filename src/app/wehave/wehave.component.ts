import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wehave',
  templateUrl: './wehave.component.html',
  styleUrls: ['./wehave.component.css']
})
export class WehaveComponent implements OnInit {
  snapshotparam: string;
  subscribedparam: string;

  constructor(private router: Router, private readonly route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit(): void {
  }
}
