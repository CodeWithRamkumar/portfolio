import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})

export class ProjectSectionComponent implements OnInit {
  project_list!: { title: string; image: string;  description: string; }[];

  constructor(){}

  ngOnInit(): void {
    this.project_list = [
      {
        title:"Project title here 1",
        image:"/images/Rectangle 4.png",
        description:""
      },
      {
        title:"Project title here 2",
        image:"/images/Rectangle 5.png",
        description:""
      },
      {
        title:"Project title here 3",
        image:"/images/Rectangle 5.png",
        description:""
      }
    ]
  }

  
 
}
