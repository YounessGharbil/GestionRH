import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRouterComponent } from './get-all-router.component';

describe('GetAllRouterComponent', () => {
  let component: GetAllRouterComponent;
  let fixture: ComponentFixture<GetAllRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
