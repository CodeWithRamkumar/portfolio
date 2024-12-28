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
        description:"As a front-end developer, I get to flex both my problem-solving skills and coding chops, blending them seamlessly to create smooth user experiences. My toolkit leans heavily into React frameworks, especially Next.js, which boosts web performance, simplifies image and media optimization, and ramps up SEO rankings. Plus, TypeScript is my go-to for catching bugs and discrepancies early on, keeping my code clean, accurate, and (mostly) error-free right from the start"
      },
      {
        heading:"Frontend Development",
        skilss:["HTML","CSS","Java script", "Type script", "Angular"],
        description:"As a front-end developer, I get to flex both my problem-solving skills and coding chops, blending them seamlessly to create smooth user experiences. My toolkit leans heavily into React frameworks, especially Next.js, which boosts web performance, simplifies image and media optimization, and ramps up SEO rankings. Plus, TypeScript is my go-to for catching bugs and discrepancies early on, keeping my code clean, accurate, and (mostly) error-free right from the start"
      },
      {
        heading:"Frontend Development",
        skilss:["HTML","CSS","Java script", "Type script", "Angular"],
        description:"As a front-end developer, I get to flex both my problem-solving skills and coding chops, blending them seamlessly to create smooth user experiences. My toolkit leans heavily into React frameworks, especially Next.js, which boosts web performance, simplifies image and media optimization, and ramps up SEO rankings. Plus, TypeScript is my go-to for catching bugs and discrepancies early on, keeping my code clean, accurate, and (mostly) error-free right from the start"
      }
    ]
  }
}
