import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneRapportRhComponent } from './get-one-rapport-rh.component';

describe('GetOneRapportRhComponent', () => {
  let component: GetOneRapportRhComponent;
  let fixture: ComponentFixture<GetOneRapportRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOneRapportRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOneRapportRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
