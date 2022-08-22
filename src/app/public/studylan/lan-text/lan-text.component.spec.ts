import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanTextComponent } from './lan-text.component';

describe('LanTextComponent', () => {
  let component: LanTextComponent;
  let fixture: ComponentFixture<LanTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
