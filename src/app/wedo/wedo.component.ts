import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wedo',
  templateUrl: './wedo.component.html',
  styleUrls: ['./wedo.component.css']
})
export class WedoComponent implements OnInit {

  constructor(private routers: Router) { }

  ngOnInit(): void {
    console.log(this.routers.url);
  }

}
