import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {
  @Input() mat_icon_string:string = "";
  @Input() title_string: string = "";
  @Input() content_string: string = "";

  constructor(){
    
  }
}
