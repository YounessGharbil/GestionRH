import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRapportRhPlus1Component } from './get-all-rapport-rh-plus1.component';

describe('GetAllRapportRhPlus1Component', () => {
  let component: GetAllRapportRhPlus1Component;
  let fixture: ComponentFixture<GetAllRapportRhPlus1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRapportRhPlus1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRapportRhPlus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
