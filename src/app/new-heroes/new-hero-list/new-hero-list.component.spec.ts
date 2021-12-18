import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeroListComponent } from './new-hero-list.component';

describe('NewHeroListComponent', () => {
  let component: NewHeroListComponent;
  let fixture: ComponentFixture<NewHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHeroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
