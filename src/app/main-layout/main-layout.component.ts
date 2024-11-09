import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../header-section/header-section.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
