import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportRhComponent } from './rapport-rh.component';

describe('RapportRhComponent', () => {
  let component: RapportRhComponent;
  let fixture: ComponentFixture<RapportRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
