import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isFixed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const screenHeight = window.innerHeight;
    const scrollPercentage = (scrollPosition / screenHeight) * 100;

    this.isFixed = scrollPercentage >= 30;
  }
}