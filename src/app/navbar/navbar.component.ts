import { Component, HostListener } from '@angular/core';
import { NgClass, NgOptimizedImage, ViewportScroller } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  currentSection = 'intro';

  constructor(private viewportScroller: ViewportScroller) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.currentSection = sectionId;
    this.viewportScroller.scrollToAnchor(sectionId);
    this.toggleMenu();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['intro', 'portfolio', 'about-me', 'client-feedback', 'collaborators','contact-form'];
    let current = sections[0];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = section;
          break;
        }
      }
    }
    this.currentSection = current;
  }
}
