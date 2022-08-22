import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudysubComponent } from './studysub.component';

describe('StudysubComponent', () => {
  let component: StudysubComponent;
  let fixture: ComponentFixture<StudysubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudysubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudysubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
