import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDemandesComponent } from './get-all-demandes.component';

describe('GetAllDemandesComponent', () => {
  let component: GetAllDemandesComponent;
  let fixture: ComponentFixture<GetAllDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDemandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
