import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportManagerComponent } from './rapport-manager.component';

describe('RapportManagerComponent', () => {
  let component: RapportManagerComponent;
  let fixture: ComponentFixture<RapportManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
