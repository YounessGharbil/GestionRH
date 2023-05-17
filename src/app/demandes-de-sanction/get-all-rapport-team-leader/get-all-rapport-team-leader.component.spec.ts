import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRapportTeamLeaderComponent } from './get-all-rapport-team-leader.component';

describe('GetAllRapportTeamLeaderComponent', () => {
  let component: GetAllRapportTeamLeaderComponent;
  let fixture: ComponentFixture<GetAllRapportTeamLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRapportTeamLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRapportTeamLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
