import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule, Location} from '@angular/common';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ExperienceDetailsComponent implements OnInit {
  projectTitle: string = '';
  company: string = '';
  location: string = '';
  duration: string = '';
  projectDescription: string = '';
  projectResponsibilities: string[] = [];
  projectTechnologies: string[] = [];
  projectImage: string = '';

  constructor(private route: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = params['id'];

      // Adding more projects
      if (projectId === 'sncf') {
        this.setProjectDetails(
          'Development of a Reservation and Ticketing Management Application for SNCF Stations',
          'CAPGEMINI',
          'Nantes, France',
          '08/2022 - Present',
          'In this role, I led the enhancement of the Ticket and Pass Management and Reservation System for SNCF, focusing on modernizing the software architecture and improving system efficiency across French stations.',
          [
            'Led the migration from Spring to Spring Boot, enhancing system scalability and maintainability.',
            'Directed a systematic redesign of system architecture with a focus on optimizing exception handling.',
            'Implemented rigorous code quality management using SONAR and Jenkins, significantly reducing technical debt.',
            'Facilitated effective collaboration between backend and frontend teams, ensuring alignment with project objectives.',
            'Provided technical mentoring and crafted comprehensive documentation, enriching the team’s development capabilities.'
          ],
          ['Java', 'Spring Boot', 'Spring Cloud', 'PostgreSQL', 'Jenkins', 'SONAR'],
          'assets/sncf.png'
        );
      } else if (projectId === 'edf') {
        this.setProjectDetails(
          'Development of Maintenance Application for Nuclear Power Plants',
          'CGI',
          'Lyon, France',
          '02/2022 - 07/2022',
          'Tasked with developing and maintaining a critical application for managing nuclear power plant maintenance activities, enhancing reliability and operational efficiency.',
          [
            'Managed incident resolution and problem analysis using Spring Boot and Angular, coordinated through GitLab.',
            'Designed and optimized Talend jobs and PL/SQL scripts for effective data administration.',
            'Developed technical solutions using Spring Boot, Angular, and Bootstrap, ensuring robust application performance.'
          ],
          ['Spring Boot', 'Angular', 'GitLab', 'Talend', 'Oracle', 'PL/SQL', 'Bootstrap'],
          'assets/edf.png'
        );
      } else if (projectId === 'adria') {
        this.setProjectDetails(
          'Digital Banking Solution for International Transfer Management',
          'Adria Business & Technology',
          'Casablanca, Morocco',
          '02/2021 - 09/2021',
          'Developed a secure and efficient backend module with Spring Boot for international transfer management, ensuring the confidentiality and integrity of business data.',
          [
            'Designed an application integrating Spring Boot, React JS, and other tools to optimize the management of international transfers.',
            'Developed a secure backend module to reinforce the confidentiality and integrity of business data.'
          ],
          ['Spring Boot', 'React JS', 'Security Practices', 'Backend Development'],
          'assets/abs.png'
        );
      }else if (projectId === 'aionic') {
        this.setProjectDetails(
          'Aionic Building Management System',
          'Freelance Project',
          'Remote',
          '01/2024 - 08/2024',
          'Developed a comprehensive building management system as a freelance project, utilizing advanced web technologies to facilitate efficient management of buildings, users, activities, and services.',
          [
            'Developed a comprehensive building management system using Next.js for the backend and Angular for the frontend.',
            'Implemented a robust room reservation system with approval workflows, ensuring seamless booking and management of meeting rooms.',
            'Integrated service management for catering and facilities, enabling a complete solution for managing room setups and additional services.',
            'Designed a user management system to handle multiple roles, including admins and regular users, with secure authentication.',
            'Optimized the system for scalability, ensuring it can handle growing user bases and multiple buildings efficiently.'
          ],
          ['Next.js', 'Angular', 'Room Reservation System', 'User Management', 'Service Management'],
          'assets/aionic.png'
        );
      }
    });
  }

  setProjectDetails(title: string, company: string, location: string, duration: string, description: string, responsibilities: string[], technologies: string[], image: string): void {
    this.projectTitle = title;
    this.company = company;
    this.location = location;
    this.duration = duration;
    this.projectDescription = description;
    this.projectResponsibilities = responsibilities;
    this.projectTechnologies = technologies;
    this.projectImage = image;
  }

  getTechnologyImage(technology: string): string {
    return `assets/skills/${technology.toLowerCase().replace(/ /g, '-')}.png`;
  }

  goBack(): void {
    this._location.back();
  }
}
