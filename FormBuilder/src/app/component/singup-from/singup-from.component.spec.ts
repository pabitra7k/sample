import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupFromComponent } from './singup-from.component';

describe('SingupFromComponent', () => {
  let component: SingupFromComponent;
  let fixture: ComponentFixture<SingupFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
