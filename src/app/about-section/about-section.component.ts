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
        education_name: "Education name here",
        institution_name: "Educational institute name and address here",
        start: "2014",
        end: "2016"
      },
      {
        education_name: "Education name here",
        institution_name: "Educational institute name and address here",
        start: "2014",
        end: "2016"
      }
    ]
    this.experince_list = [
      {
        role: "Education name here",
        office_name: "Educational institute name and address here",
        start: "2014",
        end: "2016"
      },
      {
        role: "Education name here",
        office_name: "Educational institute name and address here",
        start: "2014",
        end: "2016"
      }
    ]
  }
}
