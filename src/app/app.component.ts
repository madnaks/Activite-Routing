import { Component } from '@angular/core';
import { AppareilService } from './appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private appreilService: AppareilService) {
  }

  ngOnInit() {
  }

  onAllumer() {
    this.appreilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appreilService.switchOffAll();
    } else {
      return null;
    }
  }
}
