import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

  ngAfterViewInit(){
    this.scrollToFragment('home-section-app-id');
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
    navigator.clipboard.writeText(this.copied_link).then(
      (err) => {
        console.error('Could not copy text: ', err);
      }
    ).finally(() => {
      setTimeout(() => {
        this.copied_link_trigger = false;
      }, 1000);
    });
  }
  

  openMenu() {
    this.menu_type = this.menu_type == 'show' ? 'hide' : 'show';
  }

  scrollToFragment(fragment: string) {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(fragment);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = -60;
        window.scrollTo({
          top: rect.top + window.pageYOffset + offset,
          behavior: 'smooth'
        });
      }
    }
  }

  downloadFile() {
    const fileUrl = 'resume/resume.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
}
