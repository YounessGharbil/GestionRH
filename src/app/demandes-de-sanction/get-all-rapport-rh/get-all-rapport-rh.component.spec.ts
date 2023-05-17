import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRapportRhComponent } from './get-all-rapport-rh.component';

describe('GetAllRapportRhComponent', () => {
  let component: GetAllRapportRhComponent;
  let fixture: ComponentFixture<GetAllRapportRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRapportRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRapportRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
