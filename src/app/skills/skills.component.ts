import { Component } from '@angular/core';
import {FaIconComponent, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { faDatabase, faCode, faCogs, faLaptopCode, faLanguage, faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faJava, faReact, faGithub, faDocker, faJenkins } from '@fortawesome/free-brands-svg-icons';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = {
    databases: [
      { name: 'MySQL', icon: faDatabase },
      { name: 'Oracle', icon: faDatabase },
      { name: 'PostgreSQL', icon: faDatabase },
      { name: 'SQL Server', icon: faDatabase }
    ],
    programmingLanguages: [
      { name: 'Java', icon: faJava },
      { name: 'PL/SQL', icon: faCode }
    ],
    continuousIntegration: [
      { name: 'Git', icon: faGithub },
      { name: 'GitHub', icon: faGithub },
      { name: 'Maven', icon: faCogs },
      { name: 'Jenkins', icon: faJenkins },
      { name: 'Docker', icon: faDocker },
      { name: 'Kubernetes', icon: faCogs },
      { name: 'Sonar', icon: faCogs }
    ],
    webDevelopment: [
      { name: 'Spring Boot', icon: faCogs },
      { name: 'Angular', icon: faAngular },
      { name: 'React', icon: faReact },
      { name: 'JavaScript', icon: faCode },
      { name: 'HTML5', icon: faLaptopCode },
      { name: 'CSS3', icon: faLaptopCode },
      { name: 'Bootstrap', icon: faLaptopCode }
    ],
    languages: {
      french: { name: 'French', level: 'Bilingual', icon: faLanguage },
      english: { name: 'English', level: 'Advanced', icon: faLanguage }
    },
    softSkills: [
      { name: 'Leadership', icon: faUser },
      { name: 'Flexibility', icon: faUser },
      { name: 'Adaptability', icon: faUser },
      { name: 'Communication', icon: faUser },
      { name: 'Team spirit', icon: faUser }
    ]
  };

  constructor(library: FaIconLibrary) {
    // Add icons to the library
    library.addIcons(faDatabase, faCode, faCogs, faLaptopCode, faAngular, faJava, faReact, faGithub, faDocker, faJenkins, faLanguage, faUser);
  }
}
