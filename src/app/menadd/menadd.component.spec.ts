import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenaddComponent } from './menadd.component';

describe('MenaddComponent', () => {
  let component: MenaddComponent;
  let fixture: ComponentFixture<MenaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
