import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSalarieComponent } from './get-salarie.component';

describe('GetSalarieComponent', () => {
  let component: GetSalarieComponent;
  let fixture: ComponentFixture<GetSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
