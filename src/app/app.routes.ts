import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ExperienceDetailsComponent} from "./experience-details/experience-details.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'experience-details/:id', component: ExperienceDetailsComponent },
  { path: '**', redirectTo: '' }
];
