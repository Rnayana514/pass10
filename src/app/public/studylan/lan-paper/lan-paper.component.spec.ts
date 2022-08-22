import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanPaperComponent } from './lan-paper.component';

describe('LanPaperComponent', () => {
  let component: LanPaperComponent;
  let fixture: ComponentFixture<LanPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
