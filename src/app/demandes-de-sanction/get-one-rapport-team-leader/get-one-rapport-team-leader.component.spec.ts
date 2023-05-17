import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneRapportTeamLeaderComponent } from './get-one-rapport-team-leader.component';

describe('GetOneRapportTeamLeaderComponent', () => {
  let component: GetOneRapportTeamLeaderComponent;
  let fixture: ComponentFixture<GetOneRapportTeamLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneRapportTeamLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneRapportTeamLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
