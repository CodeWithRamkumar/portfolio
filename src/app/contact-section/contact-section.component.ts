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

  contactNavigation(type:string){
    if(type=='G'){
      window.open('https://github.com/CodeWithRamkumar','_blank')
    }else if(type=='L'){
      window.open('https://www.linkedin.com/in/ram-kumar-725324208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','_blank')
    }
  }
}
