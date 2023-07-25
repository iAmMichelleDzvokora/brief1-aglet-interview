import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgletCases } from './aglet-cases.component';

describe('AgletCases', () => {
  let component: AgletCases;
  let fixture: ComponentFixture<AgletCases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgletCases],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgletCases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
