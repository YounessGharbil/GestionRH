import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRapportSuperviseurComponent } from './get-all-rapport-superviseur.component';

describe('GetAllRapportSuperviseurComponent', () => {
  let component: GetAllRapportSuperviseurComponent;
  let fixture: ComponentFixture<GetAllRapportSuperviseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRapportSuperviseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRapportSuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
