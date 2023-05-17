import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSalariesComponent } from './upload-salaries.component';

describe('UploadSalariesComponent', () => {
  let component: UploadSalariesComponent;
  let fixture: ComponentFixture<UploadSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSalariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
