import { ChangeDetectorRef, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AnimationService } from './animation/service/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private animationService:AnimationService,
    private cdRef: ChangeDetectorRef){
  }

  // ngAfterViewInit() {
  //   if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
  //     // setTimeout(() => {
  //       this.animationService.observeElementsVisibility(); 
  //     // },100); 
  //   }
  // }
  
}
