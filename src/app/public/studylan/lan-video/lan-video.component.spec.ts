import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanVideoComponent } from './lan-video.component';

describe('LanVideoComponent', () => {
  let component: LanVideoComponent;
  let fixture: ComponentFixture<LanVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
