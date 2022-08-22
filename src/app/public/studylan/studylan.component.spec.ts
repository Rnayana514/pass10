import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudylanComponent } from './studylan.component';

describe('StudylanComponent', () => {
  let component: StudylanComponent;
  let fixture: ComponentFixture<StudylanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudylanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudylanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
