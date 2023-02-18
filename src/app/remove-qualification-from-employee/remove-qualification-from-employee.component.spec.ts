import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveQualificationFromEmployeeComponent } from './remove-qualification-from-employee.component';

describe('RemoveQualificationFromEmployeeComponent', () => {
  let component: RemoveQualificationFromEmployeeComponent;
  let fixture: ComponentFixture<RemoveQualificationFromEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveQualificationFromEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveQualificationFromEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
