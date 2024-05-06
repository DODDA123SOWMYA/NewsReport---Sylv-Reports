import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navslider',
  templateUrl: './navslider.component.html',
  styleUrls: ['./navslider.component.css']
})
export class NavsliderComponent {
  @ViewChild('cardsContainer') cardsContainer!: ElementRef;
  cardWidth: number = 320;

  moveLeft() {
    const container = this.cardsContainer.nativeElement as HTMLElement;
    const scrollLeft = container.scrollLeft - this.cardWidth;
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  }

  moveRight() {
    const container = this.cardsContainer.nativeElement as HTMLElement;
    const scrollLeft = container.scrollLeft + this.cardWidth;
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  }
}