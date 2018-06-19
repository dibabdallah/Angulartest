import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.scss']
})
export class PostblogComponent implements OnInit {

  @Input() postblogName: string;
  @Input() index: number;
  @Input() id: number;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  onSwitchOn() {
      this.appareilService.switchOnOne(this.index);
    }

    onSwitchOff() {
  
      this.appareilService.switchOffOne(this.index);
}
  
}

