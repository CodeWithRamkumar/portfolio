import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHobbiesSectionComponent } from './my-hobbies-section.component';

describe('MyHobbiesSectionComponent', () => {
  let component: MyHobbiesSectionComponent;
  let fixture: ComponentFixture<MyHobbiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHobbiesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHobbiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
