import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Databases',
      skills: [
        { name: 'MySQL', image: 'assets/skills/mysql.png' },
        { name: 'Oracle', image: 'assets/skills/oracle.png' },
        { name: 'PostgreSQL', image: 'assets/skills/postgresql.png' },
        { name: 'SQL Server', image: 'assets/skills/sqlserver.png' }
      ]
    },
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Java', image: 'assets/skills/java.png' },
        { name: 'PL/SQL', image: 'assets/skills/plsql.png' }
      ]
    },
    {
      name: 'Continuous Integration',
      skills: [
        { name: 'Git', image: 'assets/skills/git.png' },
        { name: 'GitHub', image: 'assets/skills/github.png' },
        { name: 'Maven', image: 'assets/skills/maven.png' },
        { name: 'Jenkins', image: 'assets/skills/jenkins.png' },
        { name: 'Docker', image: 'assets/skills/docker.png' },
        { name: 'Kubernetes', image: 'assets/skills/kubernetes.png' },
        { name: 'Sonar', image: 'assets/skills/sonar.png' }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'Spring Boot', image: 'assets/skills/spring-boot.png' },
        { name: 'Hibernate', image: 'assets/skills/hibernate.png' },
        { name: 'Angular', image: 'assets/skills/angular.png' },
        { name: 'React', image: 'assets/skills/react.png' },
        { name: 'Redux', image: 'assets/skills/redux.png' },
        { name: 'JavaScript', image: 'assets/skills/javascript.png' },
        { name: 'HTML5', image: 'assets/skills/html.png' },
        { name: 'CSS3', image: 'assets/skills/css.png' },
        { name: 'Bootstrap', image: 'assets/skills/bootstrap.png' }
      ]
    },
    {
      name: 'Languages',
      skills: [
        { name: 'French', image: 'assets/skills/french.png' },
        { name: 'English', image: 'assets/skills/english.png' }
      ]
    },
    {
      name: 'Soft Skills',
      skills: [
        { name: 'Leadership', image: 'assets/skills/leadership.png' },
        { name: 'Flexibility', image: 'assets/skills/flexibility.png' },
        { name: 'Adaptability', image: 'assets/skills/adaptability.png' },
        { name: 'Communication', image: 'assets/skills/communication.png' },
        { name: 'Team spirit', image: 'assets/skills/teamspirit.png' }
      ]
    }
  ];
}
