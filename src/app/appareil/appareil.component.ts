import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {

  @Input() appareilName :string;
  @Input() appareilStatus :string;
  @Input() index :number;

  constructor(private appareilService : AppareilService) { }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitch(){
    if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOneOn(this.index);
    } else if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOneOff(this.index);
    }
  }

}
