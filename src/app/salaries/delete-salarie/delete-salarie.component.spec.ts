import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSalarieComponent } from './delete-salarie.component';

describe('DeleteSalarieComponent', () => {
  let component: DeleteSalarieComponent;
  let fixture: ComponentFixture<DeleteSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
