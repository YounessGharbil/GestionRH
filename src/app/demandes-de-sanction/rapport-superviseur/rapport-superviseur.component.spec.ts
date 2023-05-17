import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportSuperviseurComponent } from './rapport-superviseur.component';

describe('RapportSuperviseurComponent', () => {
  let component: RapportSuperviseurComponent;
  let fixture: ComponentFixture<RapportSuperviseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportSuperviseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportSuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
