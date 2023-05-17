import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSalariesComponent } from './get-all-salaries.component';

describe('GetAllSalariesComponent', () => {
  let component: GetAllSalariesComponent;
  let fixture: ComponentFixture<GetAllSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllSalariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
