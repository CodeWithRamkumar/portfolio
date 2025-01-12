import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent implements OnInit{
  skill_and_service_list!: { heading: string; skilss: string[]; description: string; }[];

  ngOnInit(): void {
    this.skill_and_service_list = [
      {
        heading:"Frontend Development",
        skilss:["HTML","CSS","Java script", "Type script", "Angular"],
        description:"As a skilled Front-End Developer, I specialize in creating responsive, user-friendly websites using HTML, CSS, and JavaScript. I leverage TypeScript to write clean, maintainable code for scalable applications. With expertise in Angular, I build dynamic, single-page applications (SPAs) that provide seamless user experiences. I am passionate about delivering high-quality, performant web solutions, while ensuring cross-browser compatibility and accessibility. My focus is on writing efficient, maintainable code while staying up-to-date with the latest industry trends and technologies."
      },
      {
        heading:"Mobile App Development",
        skilss:["Ionic","Capacitor"],
        description:"As a Mobile App Developer, I specialize in building hybrid mobile applications using Ionic and Capacitor. With Ionic, I create cross-platform apps that offer a native-like experience on both iOS and Android, all while leveraging familiar web technologies like HTML, CSS, and JavaScript. Capacitor provides access to native device functionality, allowing me to integrate powerful features into hybrid apps. My goal is to deliver high-performance, responsive apps that work seamlessly across multiple platforms without compromising on user experience or functionality."
      },
      {
        heading:"Backend Development",
        skilss:["Java","MySql"],
        description:"I specialize in Backend Development using Java and MySQL to build robust, scalable, and efficient server-side applications. With Java, I develop secure and high-performance APIs, leveraging frameworks like Spring Boot for rapid development and scalability. Using MySQL, I design and manage relational databases, ensuring data integrity, optimal performance, and seamless integration with backend services. My focus is on creating well-architected, maintainable systems that power dynamic web and mobile applications"
      }
    ]
  }
}
