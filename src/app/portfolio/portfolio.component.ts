import { Component } from '@angular/core';
import {RouterLink, Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
