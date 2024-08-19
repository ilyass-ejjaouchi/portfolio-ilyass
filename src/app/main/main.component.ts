import { Component } from '@angular/core';
import {AboutMeComponent} from "../about-me/about-me.component";
import {ClientFeedbackComponent} from "../client-feedback/client-feedback.component";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {ExpertiseComponent} from "../expertise/expertise.component";
import {FooterComponent} from "../footer/footer.component";
import {IntroComponent} from "../intro/intro.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {CollaboratorsComponent} from "../collaborators/collaborators.component";
import {SkillsComponent} from "../skills/skills.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AboutMeComponent,
    ClientFeedbackComponent,
    ContactFormComponent,
    ExpertiseComponent,
    FooterComponent,
    IntroComponent,
    NavbarComponent,
    PortfolioComponent,
    CollaboratorsComponent,
    SkillsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
