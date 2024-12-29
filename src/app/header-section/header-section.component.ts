import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../animation/service/animation.service';
@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent implements OnInit {
  theme_type!: any;
  copied_link!: string;
  copied_link_trigger!: boolean;
  menu_type: any;

  constructor(private animationService:AnimationService) { }

  ngOnInit(): void {
    this.copied_link_trigger = false;
    this.menu_type = '';
    if (typeof window !== 'undefined' && window.localStorage) {
      if(localStorage.getItem('theme_mode')){
        this.theme_type = localStorage.getItem('theme_mode');
      }else{
        this.theme_type = 'Dark';
      }
      if (this.theme_type !='Dark') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
    } else {
      console.warn('localStorage is not available');
    }
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.copied_link = window.location.href;
      window.scrollTo(0, 0);
      // this.scrollToFragment('home-section-app-id');
      this.animationService.observeElementsVisibility();
    }
  }


  themeChangeTrigger() {
    this.theme_type = this.theme_type == 'Dark' ? 'Light' : 'Dark';
    if (this.theme_type !='Dark') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('theme_mode',this.theme_type)
  }

  
  copyLinkTrigger() {
    this.copied_link_trigger = true;
    const textToCopy = this.copied_link;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          console.log("Text copied using Clipboard API.");
          setTimeout(() => {
            this.copied_link_trigger = false;
          }, 3000);
        })
        .catch((err) => {
          console.error("Clipboard API failed:", err);
          this.fallbackCopyToClipboard(textToCopy);
        });
    } else {
      this.fallbackCopyToClipboard(textToCopy);
    }
  }
  
  // Fallback method using execCommand for mobile
  fallbackCopyToClipboard(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
  
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        console.log("Text copied using execCommand.");
        setTimeout(() => {
          this.copied_link_trigger = false;
        }, 3000);
      } else {
        console.error("Copy failed with execCommand (return false).");
      }
    } catch (err) {
      console.error("Error copying with execCommand:", err);
    }
    document.body.removeChild(textArea);
  }

  openMenu() {
    this.menu_type = this.menu_type == 'show' ? 'hide' : 'show';
  }

  scrollToFragment(fragment: string) {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(fragment);
      if (element) {
        const rect = element.getBoundingClientRect();
        let offset;
        if(fragment == 'home-section-app-id'){
          offset = -60;
        }else{
          offset= window.innerWidth<900 ? -60: 60;
        }
       
        window.scrollTo({
          top: rect.top + window.pageYOffset + offset,
          // behavior: 'instant'
        });
        this.animationService.observeElementsVisibility(); 
      }
    }
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
