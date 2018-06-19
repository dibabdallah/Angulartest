import { Component,OnInit } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  constructor() { }

  ngOnInit() {
  }
  
}

