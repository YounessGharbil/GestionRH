import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneRapportRhPlus1Component } from './get-one-rapport-rh-plus1.component';

describe('GetOneRapportRhPlus1Component', () => {
  let component: GetOneRapportRhPlus1Component;
  let fixture: ComponentFixture<GetOneRapportRhPlus1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneRapportRhPlus1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneRapportRhPlus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
