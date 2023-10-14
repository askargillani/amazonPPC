import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.css']
})
export class ReviewsCarouselComponent {
  slides = [
    {image: 'assets/images/nature/1.jpg', text: 'First'},
    {image: 'assets/images/nature/2.jpg',text: 'Second'},
    {image: 'assets/images/nature/3.jpg',text: 'Third'}
 ];
 noWrapSlides = false;
 showIndicator = true;
 constructor() { }

 ngOnInit(): void {
 }
}
