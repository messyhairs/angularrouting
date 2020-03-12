import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = [{
    name: 'gokulnath',
    role: 'Frontend developer'
  }];
  userdetails: any = [];
  constructor(private deviceService: DeviceDetectorService, private router: Router) { }

  ngOnInit(): void {

  }

}
