import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLocatorComponent } from './item-locator.component';

describe('ItemLocatorComponent', () => {
  let component: ItemLocatorComponent;
  let fixture: ComponentFixture<ItemLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
