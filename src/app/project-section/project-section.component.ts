import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent implements OnInit {
  project_list!: { title: string; image: string;  description: string; }[];

  constructor(){}

  ngOnInit(): void {
    this.project_list = [
      {
        title:"Project title here 1",
        image:"",
        description:""
      },
      {
        title:"Project title here 2",
        image:"",
        description:""
      },
      {
        title:"Project title here 3",
        image:"",
        description:""
      }
    ]
  }

}
