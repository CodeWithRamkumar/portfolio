import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-place-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-place-project-section.component.html',
  styleUrl: './work-place-project-section.component.scss'
})
export class WorkPlaceProjectSectionComponent implements OnInit {
  work_project_list!: { project_name: string; role: string; start: string; end: string; }[];

  ngOnInit(): void {
    this.work_project_list = [
      {
        project_name:"Project name",
        role:"Name of the role",
        start:"2021",
        end:"2024"
      },
      {
        project_name:"Project name",
        role:"Name of the role",
        start:"2021",
        end:"2024"
      },
      {
        project_name:"Project name 2",
        role:"Name of the role",
        start:"2021",
        end:"2024"
      }
    ];
  }
}
