import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPlaceProjectSectionComponent } from './work-place-project-section.component';

describe('WorkPlaceProjectSectionComponent', () => {
  let component: WorkPlaceProjectSectionComponent;
  let fixture: ComponentFixture<WorkPlaceProjectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPlaceProjectSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkPlaceProjectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
