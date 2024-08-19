import {AfterViewInit, ChangeDetectorRef, Component, HostListener} from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-client-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-feedback.component.html',
  styleUrls: ['./client-feedback.component.css']
})
export class ClientFeedbackComponent implements AfterViewInit {
  testimonials = [
    {
      stars: 5,
      text: "C'était trés bien",
      client: "topone111",
      company: "France",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "Professionnelle et tres rapide",
      client: "boreltonleu",
      company: "Germany",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "I had an exceptional experience with this seller. From start to finish, they demonstrated professionalism, reliability, and a commitment to customer satisfaction that truly stood out.",
      client: "yahia_abril",
      company: "Morocco",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "Communicates and efficient.",
      client: "clemensah",
      company: "United States",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "Prestataire très gentil, rapide et très compétent. Je recommande!",
      client: "rbarhdadi",
      company: "France",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "If you're looking for a skilled and reliable developer on Fiverr, look no further than Ilyass. I had a great experience working with him on a recent project. His communication was prompt and professional, and he delivered high-quality work that exceeded my expectations.",
      client: "oelgoubi",
      company: "France",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "A livré exactement ce que j’ai demander, dans les temps et à meme pris le temps d’expliquer chaque etapes du processus. Je recommande fortement ! 10/10",
      client: "chakibselhi",
      company: "Canada",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "I hired a freelancer on Fiverr to develop an app for my business, and I'm extremely satisfied with the results. The app's functionality is excellent, the user interface is intuitive, and the freelancer was able to incorporate all of the features I requested seamlessly. Their expertise and dedication were evident throughout the project, and working with them was a great experience. I highly recommend this freelancer for anyone looking to develop an app on Fiverr.",
      client: "simongs529",
      company: "Belgium",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "Everything was perfect.",
      client: "adev_company",
      company: "Morocco",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "This man was amazing, quick response and delivery. Helped me out and fully understands what I was saying.",
      client: "tyronerg",
      company: "Netherlands",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "Amazing above expectation.. really fast service and honorable seller.. will always return to him for codes and projects.",
      client: "adev_company",
      company: "Morocco",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "Very hard working, good results in time. I appreciated working with Ilyass. I highly recommend him to you.",
      client: "simongs529",
      company: "Belgium",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    },
    {
      stars: 5,
      text: "A very good seller. He works very disciplined, delivers the product on time. Clear communication which is very important.",
      client: "hos123",
      company: "Netherlands",
      image: "https://via.placeholder.com/75x75",
      expanded: false
    }
  ];
  groupedTestimonials: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.groupTestimonials();
  }

  ngAfterViewInit() {
    // Trigger change detection to ensure that carousel items are correctly rendered
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.groupTestimonials();
  }

  groupTestimonials() {
    this.groupedTestimonials = []; // Reset grouped testimonials
    const screenWidth = window.innerWidth;
    const groupSize = screenWidth < 576 ? 1 : 3; // 1 item for small screens, 3 for others

    for (let i = 0; i < this.testimonials.length; i += groupSize) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + groupSize));
    }
  }

  toggleExpansion(testimonial: any) {
    testimonial.expanded = !testimonial.expanded;
  }
}
