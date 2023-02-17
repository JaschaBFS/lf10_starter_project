import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationDeleteComponent } from './qualification-delete.component';

describe('QualificationDeleteComponent', () => {
  let component: QualificationDeleteComponent;
  let fixture: ComponentFixture<QualificationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
