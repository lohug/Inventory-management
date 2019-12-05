import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureeditorComponent } from './fixtureeditor.component';

describe('FixtureeditorComponent', () => {
  let component: FixtureeditorComponent;
  let fixture: ComponentFixture<FixtureeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
