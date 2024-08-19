import {AfterViewInit, ChangeDetectorRef, Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from "@angular/common";
import {testimonials} from "./data";

declare let window: any;

@Component({
  selector: 'app-collaborators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})

export class CollaboratorsComponent implements AfterViewInit {


  groupedTestimonials: any[] = [];
  isBrowser: boolean;

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.groupTestimonials();
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.cdr.detectChanges();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.isBrowser) {
      this.groupTestimonials();
    }
  }

  groupTestimonials() {
    this.groupedTestimonials = []; // Reset grouped testimonials
    const screenWidth = window.innerWidth;
    const groupSize = screenWidth < 576 ? 1 : 4;

    for (let i = 0; i < testimonials.length; i += groupSize) {
      this.groupedTestimonials.push(testimonials.slice(i, i + groupSize));
    }
  }

  toggleExpansion(testimonial: any) {
    testimonial.expanded = !testimonial.expanded;
  }
}
