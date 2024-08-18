import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {IntroComponent} from "./intro/intro.component";
import {ExpertiseComponent} from "./expertise/expertise.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ClientFeedbackComponent} from "./client-feedback/client-feedback.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, IntroComponent, ExpertiseComponent, AboutMeComponent, PortfolioComponent, ClientFeedbackComponent, ContactFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-v2';
}
