import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDeSanctionComponent } from './demandes-de-sanction.component';

describe('DemandesDeSanctionComponent', () => {
  let component: DemandesDeSanctionComponent;
  let fixture: ComponentFixture<DemandesDeSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesDeSanctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesDeSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
