import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpsModalsComponent } from './pop-ups-modals.component';

describe('PopUpsModalsComponent', () => {
  let component: PopUpsModalsComponent;
  let fixture: ComponentFixture<PopUpsModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpsModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpsModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
