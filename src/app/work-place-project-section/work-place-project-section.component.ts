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
  work_project_list!: { project_name: string; role: string; start: string; end: string; link:string }[];

  ngOnInit(): void {
    this.work_project_list = [
      {
        project_name:"Qbss",
        role:"Full-stack Developer",
        start:"2022",
        end:"2023",
        link:'https://portal.dev.qbhdemo.com/#/login'
      },
      {
        project_name:"Edrevel",
        role:"Full-stack Developer",
        start:"2023",
        end:"2025",
        link:'https://prod.edrevel.com/#/custom-academy-login'
      }
    ];
  }

  navigationToLink(link:string){
    window.open(link,'_blank');
  }
}
