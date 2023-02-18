import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualiToEmployeeComponent } from './add-quali-to-employee.component';

describe('AddQualiToEmployeeComponent', () => {
  let component: AddQualiToEmployeeComponent;
  let fixture: ComponentFixture<AddQualiToEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQualiToEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQualiToEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
