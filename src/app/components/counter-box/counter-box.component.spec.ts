/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CounterBoxComponent } from './counter-box.component';

describe('CounterBoxComponent', () => {
  let component: CounterBoxComponent;
  let fixture: ComponentFixture<CounterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment by 1', () => {
    component.counterValue = 3;
    component.onIncrement();
    expect(component.counterValue).toEqual(4);
  });

  it('should decrement by 1', () => {
    component.counterValue = 200;
    component.onDecrement();
    expect(component.counterValue).toEqual(199);
  });


});
