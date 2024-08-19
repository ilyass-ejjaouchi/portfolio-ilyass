import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-experience-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-details.component.html',
  styleUrl: './experience-details.component.css'
})
export class ExperienceDetailsComponent implements OnInit {
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
        this.projectTitle = 'Development of a Reservation and Ticketing Management Application for SNCF Stations';
        this.company = 'CAPGEMINI';
        this.location = 'Nantes, France';
        this.duration = '08/2022 - Present';
        this.projectDetails = [
          'Precise migration from Spring to Spring Boot and upgrading to Java 17 were executed, unlocking innovative functionalities that enhanced code performance and maintenance, optimizing existing workflows.',
          'Systematic architecture redesign was accomplished by integrating Spring Boot, with a keen focus on optimizing exception handling, boosting application reliability.',
          'Strategic use of SONAR and Jenkins fostered initiatives to elevate code quality, playing a crucial role in identifying and mitigating technical debt, fostering a more structured and reliable coding environment.',
          'Effective coordination was established between back-end and front-end teams, nurturing enriching cross-team collaboration. This enhanced communication with Product Owners and the testing team, ensuring synchronized and clear understanding of goals and requirements.',
          'In-depth mentoring and technical support facilitated migration phases. Crafting comprehensive and detailed documentations was prioritized, contributing to an enriched learning and development environment.'
        ];
        this.projectImage = 'assets/sncf.png';  // Set the image path
      } else if (projectId === 'nuclear') {
        this.projectTitle = 'Development of an Application for Planning and Executing Maintenance Activities of Nuclear Power Plants';
        this.company = 'CGI';
        this.location = 'Lyon, France';
        this.duration = '02/2022 - 07/2022';
        this.projectDetails = [
          'Analyzed and resolved various application incidents and problems, ensuring service continuity and user satisfaction.',
          'Developed and executed unit tests for new functionalities to validate quality and performance.',
          'Enhanced data administration using PL/SQL scripts, enabling more efficient and reliable data management.',
          'Crafted Talend jobs to automate and optimize various processes, improving workflow management.',
          'Technically designed the application, ensuring robust, reliable solutions that meet project needs.'
        ];
        this.projectImage = 'assets/edf.png';  // Set the image path
      } else if (projectId === 'transfer') {
        this.projectTitle = 'Digital Banking Solution Back End in Microservices & Front End with React';
        this.company = 'Adria Business & Technology';
        this.location = 'Casablanca, Morocco';
        this.duration = '02/2021 - 09/2021';
        this.projectDetails = [
          'Development of a module for securing downloaded files, ensuring robust integrity and confidentiality during transmission.',
          'Implementation of an advanced decryption functionality, guaranteeing thorough validity checks of files before further manipulation.',
          'Introduction of an innovative file sealing system, using a distinct public key for each client, enhancing the security and authenticity of shared data.',
          'Configuration of a standardized encryption method, using a unique key for all clients, optimizing the decryption process and file accessibility.',
          'Design and deployment of a comprehensive microservices application, facilitating various essential operations related to international transfers.',
          'Development of a feature for easy declaration of international beneficiaries, increasing transaction transparency and traceability.'
        ];
        this.projectImage = 'assets/abs.png';  // Set the image path
      } else if (projectId === 'mobileApp') {
        this.projectTitle = 'Design and Implementation of a Mobile Application for Construction Site Management';
        this.company = 'ABC Construction';
        this.location = 'Paris, France';
        this.duration = '03/2020 - 01/2021';
        this.projectDetails = [
          'Significant contribution to the design of a robust mobile application, with the creation of a well-structured database using MySQL and Hibernate.',
          'Implementation of a strong and secure authentication system using JWT and Spring Security.',
          'Utilized Spring Boot, Angular, and Ionic for effective development, with successful cloud deployment via Heroku.'
        ];
        this.projectImage = 'assets/abc_construction.png';  // Set the image path
      }
      // Add more cases for other projects as needed
    });
  }

  goBack(): void {
    this._location.back();
  }
}
