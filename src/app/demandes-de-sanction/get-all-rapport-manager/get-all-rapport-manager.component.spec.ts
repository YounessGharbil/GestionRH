import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRapportManagerComponent } from './get-all-rapport-manager.component';

describe('GetAllRapportManagerComponent', () => {
  let component: GetAllRapportManagerComponent;
  let fixture: ComponentFixture<GetAllRapportManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRapportManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRapportManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
