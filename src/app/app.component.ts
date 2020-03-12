import { Component } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpreparence';
  constructor(private routers: Router) { }
  ngonInit() {
    console.log(this.routers.url);
  }
}
