import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  education_list!: { education_name: string; institution_name: string; start: string; end: string; }[];
  experince_list!: { role: string; office_name: string; start: string; end: string; }[];


  ngOnInit(): void {
    this.education_list = [
      {
        
        education_name: "Jeppiaar Srr Engineering College",
        institution_name: "Electronics and Communication Engineering",
        start: "2016",
        end: "2020"
      }
    ]
    this.experince_list = [
      {
        role: "Nila Apps Pvt Ltd",
        office_name: "Front-end developer",
        start: "2022",
        end: "2025"
      }
    ]
  }
}
