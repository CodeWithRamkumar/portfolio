import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { ProjectSectionComponent } from '../project-section/project-section.component';
import { AboutSectionComponent } from "../about-section/about-section.component";
import { MyHobbiesSectionComponent } from "../my-hobbies-section/my-hobbies-section.component";
import { WorkPlaceProjectSectionComponent } from "../work-place-project-section/work-place-project-section.component";
import { ContactSectionComponent } from "../contact-section/contact-section.component";
import { FooterSectionComponent } from '../footer-section/footer-section.component';
import { SkillSectionComponent } from "../skill-section/skill-section.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderSectionComponent, HomeSectionComponent, ProjectSectionComponent, AboutSectionComponent,
    MyHobbiesSectionComponent, WorkPlaceProjectSectionComponent, ContactSectionComponent, FooterSectionComponent, SkillSectionComponent, CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss','./main-layout-animation.component.scss']
})
export class MainLayoutComponent {

  stars = [{},{}]
}
