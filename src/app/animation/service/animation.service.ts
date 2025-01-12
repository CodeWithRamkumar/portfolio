import { Injectable } from '@angular/core';
import { RevealTexts } from '../class/reveal-texts';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private revealTexts: RevealTexts) { }

  // Generic function to observe visibility of elements and trigger animations
  private observeSectionVisibility(
    targetSelector: string, // target main class visible check class
    elementSelectors: string[], //  apply class list class name
    showClass: string, // show animation class name
    hideClass: string, // hide aimimation class name
    threshold: number = 0.9,
    class_wave: string, // wave animation class name
    wave_text: string ,//  wave animation text,
    unsubcribeEnable: boolean = true
  ) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (elementSelectors.length > 0) {
          elementSelectors.forEach(selector => {
            const element = entry.target.querySelectorAll(selector);
            if (element) {
              if (entry.isIntersecting) {
                element.forEach((list)=>{
                  list.classList.remove(hideClass);
                  list.classList.add(showClass);
                });
                if(unsubcribeEnable){
                  observer.unobserve(entry.target);
                }
              } else {
                element.forEach((list)=>{
                  list.classList.remove(showClass);
                  list.classList.add(hideClass);
                });
              }
            }
          });
        } else {
          if (entry.isIntersecting) {
            this.textReveal(class_wave, wave_text);
            if(unsubcribeEnable){
              observer.unobserve(entry.target);
            }
          } else {
            this.textHide(class_wave, wave_text);
          }
        }
      });
    }, {
      threshold // Default to 50% visibility
    });

    // Start observing all target elements
    const targets = document.querySelectorAll(targetSelector);
    targets.forEach(target => observer.observe(target));
  }

  // Call observeSectionVisibility for each section in your app
  observeElementsVisibility(type:string): void {
   let width =  window.innerWidth<992;
    // project section // work place project section 
    const sectionConfigs = [
      { 
        mainContainerClass: '.project-section-card', 
        targetClass: '.project-section-image-div0', 
        hideClass: 'animation-section-hide-left', 
        showClass: 'animation-section-show',
        threshold:0.8 
      },
      { 
        mainContainerClass: '.project-section-card', 
        targetClass: '.project-section-image-div1', 
        hideClass: 'animation-section-hide-right', 
        showClass: 'animation-section-show',
        threshold:0.8 
      },
      { 
        mainContainerClass: '.project-section-card', 
        targetClass: '.project-section-image-div2', 
        hideClass: 'animation-section-hide-left', 
        showClass: 'animation-section-show',
        threshold:0.8 
      },
      { 
        mainContainerClass: '.project-section-card', 
        targetClass: '.project-section-content-div0', 
        hideClass: 'animation-section-hide-right', 
        showClass: 'animation-section-show',
        threshold:0.8  
      },
      { 
        mainContainerClass: '.project-section-card', 
        targetClass: '.project-section-content-div1', 
        hideClass: 'animation-section-hide-left', 
        showClass: 'animation-section-show',
        threshold:0.8 
      },
      { 
        mainContainerClass: '.project-section-card', 
        targetClass: '.project-section-content-div2', 
        hideClass: 'animation-section-hide-right', 
        showClass: 'animation-section-show',
        threshold:0.8  
      },
      { 
        mainContainerClass: '.work-place-project-section-grid-items-div', 
        targetClass: '.work-place-section-div0', 
        hideClass: 'animation-section-hide-right', 
        showClass: 'animation-section-show',
        threshold:0.5
      },
      { 
        mainContainerClass: '.work-place-project-section-grid-items-div', 
        targetClass: '.work-place-section-div1', 
        hideClass: 'animation-section-hide-left', 
        showClass: 'animation-section-show',
        threshold:0.5
      },
      { 
        mainContainerClass: '.work-place-project-section-grid-items-div', 
        targetClass: '.work-place-section-div2', 
        hideClass: 'animation-section-hide-right', 
        showClass: 'animation-section-show',
        threshold:0.5 
      }
    ];
    
    // Loop through each configuration and apply the observeSectionVisibility method
    sectionConfigs.forEach((config) => {
      this.observeSectionVisibility(
        config.mainContainerClass,
        [config.targetClass],
        config.showClass,
        config.hideClass,
        width ? 0.5:config.threshold,
        '',
        '' 
      );
    });

    // header section
    this.observeSectionVisibility('.header-section-main-div', ['.header-animation-class'], 'animation-section-show', 'animation-section-hide-top', width ? 0.5:0.8, '', '');
    this.observeSectionVisibility('.header-section-main-mobile-div', ['.header-animation-class'], 'animation-section-show', 'animation-section-hide-top', width ? 0.5:0.8, '', '');
    this.observeSectionVisibility('.header-section-mobile-menu-div', ['.header-animation-class'], 'animation-section-show', 'animation-section-hide-top', width ? 0.5:0.8, '', '');
   
    // home section 
    this.observeSectionVisibility('.home-section-inner-div', ['.home-text-animation-left-class'], 'animation-section-show', 'animation-section-hide-left', width ? 0.5:0.8, '', '');
    this.observeSectionVisibility('.home-section-inner-div', ['.home-text-animation-right-class'], 'animation-section-show', 'animation-section-hide-right', width ? 0.5:0.8, '', '');

    // skill section
    this.observeSectionVisibility('.skill-section-card-div', ['.skill-section-card-reveal-div'], 'animation-section-show', 'animation-section-hide-right', width ? 0.5:0.8, '', '');

    // about section
    this.observeSectionVisibility('.about-section-card', ['.about-section-card-image-div', '.about-section-card-content-div'], 'animation-section-show', 'animation-section-hide-left', width ? 0.5:0.8, '', '');
    this.observeSectionVisibility('.about-education-div', ['.about-education-content-main-div', '.about-education-content-heading-div'], 'animation-section-show', 'animation-section-hide-bottom', width ? 0.5:0.8, '', '');
    this.observeSectionVisibility('.about-experince-div', ['.about-experince-content-main-div', '.about-experince-content-heading-div'], 'animation-section-show', 'animation-section-hide-bottom', width ? 0.5:0.8, '', '');
    this.observeSectionVisibility('.education-experince-separate-div', ['.education-experince-separate-span-2'], 'animation-section-show', 'animation-section-hide-bottom', width ? 0.5:0.8, '', '');

    // fotter section
    this.observeSectionVisibility('.footer-section-main-div', ['.footer-animation-class'], 'animation-section-show', 'animation-section-hide-bottom', width ? 0.5:0.8, '', '');
   
    //contacy and hobbie wave animation
    const footerSectionSelectors = [
      { selector: (type=='menu' && !width) ? '.contact-section-main-div':'.my-hobbies-section-content', elementClass: '.my-hobbies-section-content', text: this.revealTexts.hobbiesDescription , threshold: width ? 0.5: (type=='menu' && !width) ? 0.1:0.5 },
      { selector: '.contact-section-main-div', elementClass: '.contact-section-question-prompt-div', text: this.revealTexts.contactQuestionsPrompt,threshold: width ? 0.5: 0.8 },
      { selector: '.contact-section-main-div', elementClass: '.contact-section-call-action-div', text: this.revealTexts.contactCallToAction,threshold: width ? 0.5: 0.8 },
      { selector: '.contact-section-main-div', elementClass: '.contact-section-description-div', text: this.revealTexts.contactBriefDescription ,threshold: width ? 0.5: 0.8},
    ];

    footerSectionSelectors.forEach(({ selector, elementClass, text,threshold }) => {
      this.observeSectionVisibility(selector, [], '', '',threshold, elementClass, text);
    });

    this.observeSectionVisibility('.contact-section-main-div', ['.fa-envelope', '.fa-github', '.fa-linkedin', '.contact-section-download-cv-buton'],
      'animation-section-show', 'animation-section-hide-bottom', width ? 0.5:0.8, '', '');

    // star rotate amimation
    this.observeSectionVisibility('.contact-section-main-div', ['.contact-five-star-animation-svg'], 'rotate-animation-show', 'rotate-animation-hide', width ? 0.5:0.8, '', '');
    this.observeSectionVisibility('.home-section-inner-div', ['.home-star-animation-svg'], 'rotate-animation-show', 'rotate-animation-hide', width ? 0.5:0.8, '', '');
  }

  textReveal(class_wave: string, text: string): void {
    let textElement = document.querySelectorAll(`${class_wave}`)[0];
    if (textElement) {
      const wordArray = text.split(' ');
      textElement.innerHTML = '';
      wordArray.forEach((word, index) => {
        const span = document.createElement('span');
        span.innerHTML = word;
        span.style.animationDelay = `${index * 0.05}s`;
        textElement.appendChild(span);
        if (index !== wordArray.length - 1) {
          textElement.appendChild(document.createTextNode(' '));
        }
      });
    } else {
      console.warn(`Element with class "${class_wave}" not found`);
    }
  }


  textHide(class_wave: string, text: string): void {
    const element = document.querySelectorAll(class_wave)[0];
    if (element) {
      element.innerHTML = "";
    }
  }

  animationFunction(event:any){
    console.log(event);
    const button = event.target;
    button.classList.add('active');
    setTimeout(() => {
      button.classList.remove('active');
    }, 2000);
  }

}
