import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneRouterComponent } from './get-one-router.component';

describe('GetOneRouterComponent', () => {
  let component: GetOneRouterComponent;
  let fixture: ComponentFixture<GetOneRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
