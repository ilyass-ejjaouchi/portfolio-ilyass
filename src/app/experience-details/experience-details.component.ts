import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import { Location } from '@angular/common';

@Component({
  selector: 'app-experience-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-details.component.html',
  styleUrl: './experience-details.component.css'
})
export class ExperienceDetailsComponent implements OnInit{
  projectTitle: string = '';
  company: string = '';
  location: string = '';
  duration: string = '';
  projectDetails: string[] = [];
  projectImage: string = '';  // Added for the image

  constructor(private route: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];

      // Based on projectId, set the details including images
      if (projectId === 'sncf') {
        this.projectTitle = 'SNCF Ticket Management';
        this.company = 'CAPGEMINI';
        this.location = 'Nantes, France';
        this.duration = '08/2022 - Present';
        this.projectDetails = [
          'Technical analysis of existing systems, extraction of business rules.',
          'Modeling of APIs and drafting of technical documentation and developer guides.',
          'Design of interface contracts linking the application to other SNCF applications.',
          'Implementation of a microservices architecture using Spring Cloud, Java 21, PostgreSQL.',
          'Managed the migration from Spring to Spring Boot and updated Java to version 17 to optimize performance.',
          'Managed the redesign of the architecture using Spring Boot, while improving exception handling.',
          'Use of SONAR and Jenkins tools to improve code quality, while reducing technical debt.',
          'Efficient coordination of development efforts between back-end and front-end teams, facilitating communication with POs (Product Owners) and the certification team.',
          'Technical mentoring provided to team members, support during migrations, creation of detailed documentation.'
        ];
        this.projectImage = 'assets/sncf.png';  // Set the image path
      } else if (projectId === 'nuclear') {
        this.projectTitle = 'Nuclear Plant Maintenance';
        this.company = 'CGI';
        this.location = 'Lyon, France';
        this.duration = '02/2022 - 07/2022';
        this.projectDetails = [
          'Incident management with Spring Boot and Angular, coordination via GitLab.',
          'Talend job design and optimization of Oracle and PostgreSQL databases with PL/SQL scripts for data administration.',
          'Technical design and development of solutions with Spring Boot, Angular, and Bootstrap.'
        ];
        this.projectImage = 'assets/edf.png';  // Set the image path
      } else if (projectId === 'transfer') {
        this.projectTitle = 'International Transfer Management';
        this.company = 'Adria Business & Technology';
        this.location = 'Casablanca, Maroc';
        this.duration = '02/2021 - 09/2021';
        this.projectDetails = [
          'Design of an application integrating Spring Boot, React JS, and other tools to optimize the management of international transfers.',
          'International transfer request and beneficiary registration.',
          'Request signature and history consultation.',
          'Development of a secure backend module with Spring Boot to reinforce the confidentiality and integrity of business data.',
          'Encrypting and decrypting downloaded files during order delivery.'
        ];
        this.projectImage = 'assets/abs.png';  // Set the image path
      }
      // Add more cases for other projects
    });
  }
  goBack(): void {
    this._location.back();
  }
}
