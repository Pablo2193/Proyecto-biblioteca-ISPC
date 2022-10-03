/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConeccionComponent } from './coneccion.component';

describe('ConeccionComponent', () => {
  let component: ConeccionComponent;
  let fixture: ComponentFixture<ConeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
