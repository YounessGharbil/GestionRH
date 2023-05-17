import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRapportRouterComponent } from './create-rapport-router.component';

describe('CreateRapportRouterComponent', () => {
  let component: CreateRapportRouterComponent;
  let fixture: ComponentFixture<CreateRapportRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRapportRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRapportRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
