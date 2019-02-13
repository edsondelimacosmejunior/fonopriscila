import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSociaisPage } from './redes-sociais.page';

describe('RedesSociaisPage', () => {
  let component: RedesSociaisPage;
  let fixture: ComponentFixture<RedesSociaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesSociaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesSociaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
