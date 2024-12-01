import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent implements OnInit {
  project_list!: { title: string; image: string;  description: string; }[];
  // @ViewChild('project-section-image-div') elementRef!: ElementRef;

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
