import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneRapportSuperviseurComponent } from './get-one-rapport-superviseur.component';

describe('GetOneRapportSuperviseurComponent', () => {
  let component: GetOneRapportSuperviseurComponent;
  let fixture: ComponentFixture<GetOneRapportSuperviseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneRapportSuperviseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneRapportSuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
