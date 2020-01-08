import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils: any[];

  constructor(private appreilService:AppareilService) { }

  ngOnInit() {
    this.appareils = this.appreilService.appareils;
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }

}
