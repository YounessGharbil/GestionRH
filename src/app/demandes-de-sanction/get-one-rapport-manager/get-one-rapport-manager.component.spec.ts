import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneRapportManagerComponent } from './get-one-rapport-manager.component';

describe('GetOneRapportManagerComponent', () => {
  let component: GetOneRapportManagerComponent;
  let fixture: ComponentFixture<GetOneRapportManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneRapportManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneRapportManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
