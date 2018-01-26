import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound404ErrorComponent } from './not-found404-error.component';

describe('NotFound404ErrorComponent', () => {
  let component: NotFound404ErrorComponent;
  let fixture: ComponentFixture<NotFound404ErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFound404ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFound404ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
