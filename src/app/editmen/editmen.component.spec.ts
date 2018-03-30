import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmenComponent } from './editmen.component';

describe('EditmenComponent', () => {
  let component: EditmenComponent;
  let fixture: ComponentFixture<EditmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
