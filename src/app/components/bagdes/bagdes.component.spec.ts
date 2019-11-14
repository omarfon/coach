import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagdesComponent } from './bagdes.component';

describe('BagdesComponent', () => {
  let component: BagdesComponent;
  let fixture: ComponentFixture<BagdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagdesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
