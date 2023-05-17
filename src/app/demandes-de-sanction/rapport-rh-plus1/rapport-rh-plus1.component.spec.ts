import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportRhPlus1Component } from './rapport-rh-plus1.component';

describe('RapportRhPlus1Component', () => {
  let component: RapportRhPlus1Component;
  let fixture: ComponentFixture<RapportRhPlus1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportRhPlus1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportRhPlus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
