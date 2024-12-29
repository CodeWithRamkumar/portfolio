import { Component } from '@angular/core';
import { AnimationService } from '../animation/service/animation.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  constructor(public animationService:AnimationService){
  }
  
  downloadFile() {
    const fileUrl = 'resume/ramkumar_resume.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'ramkumar_resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
