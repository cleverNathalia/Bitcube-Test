import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotifyComponent } from './error-notify.component';

describe('ErrorNotifyComponent', () => {
  let component: ErrorNotifyComponent;
  let fixture: ComponentFixture<ErrorNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
