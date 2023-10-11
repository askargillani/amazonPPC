import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.css']
})
export class ServicesCardComponent {
  @Input() title_string: string="";
  @Input() icon_string: string="";

}
