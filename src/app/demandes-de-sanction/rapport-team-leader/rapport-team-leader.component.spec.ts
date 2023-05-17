import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportTeamLeaderComponent } from './rapport-team-leader.component';

describe('RapportTeamLeaderComponent', () => {
  let component: RapportTeamLeaderComponent;
  let fixture: ComponentFixture<RapportTeamLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportTeamLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportTeamLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
