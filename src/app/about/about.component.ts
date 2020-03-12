import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService, private router: Router) { }

  ngOnInit(): void {
    this.ismobile();
  }
  ismobile() {
    this.deviceService.isMobile();
  }
}
