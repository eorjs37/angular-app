import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeSelectedComponent } from './coffee-selected.component';

describe('CoffeeSelectedComponent', () => {
  let component: CoffeeSelectedComponent;
  let fixture: ComponentFixture<CoffeeSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
