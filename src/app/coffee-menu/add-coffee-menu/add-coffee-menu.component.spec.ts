import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoffeeMenuComponent } from './add-coffee-menu.component';

describe('AddCoffeeMenuComponent', () => {
  let component: AddCoffeeMenuComponent;
  let fixture: ComponentFixture<AddCoffeeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoffeeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoffeeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
