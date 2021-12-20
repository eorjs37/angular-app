import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeroesComponent } from './new-heroes.component';

describe('NewHeroesComponent', () => {
  let component: NewHeroesComponent;
  let fixture: ComponentFixture<NewHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
