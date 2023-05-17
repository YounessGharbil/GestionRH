import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneDemandeComponent } from './get-one-demande.component';

describe('GetOneDemandeComponent', () => {
  let component: GetOneDemandeComponent;
  let fixture: ComponentFixture<GetOneDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
