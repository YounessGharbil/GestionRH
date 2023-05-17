import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalarieComponent } from './create-salarie.component';

describe('CreateSalarieComponent', () => {
  let component: CreateSalarieComponent;
  let fixture: ComponentFixture<CreateSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
