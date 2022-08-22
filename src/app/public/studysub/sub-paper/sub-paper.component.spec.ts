import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPaperComponent } from './sub-paper.component';

describe('SubPaperComponent', () => {
  let component: SubPaperComponent;
  let fixture: ComponentFixture<SubPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
