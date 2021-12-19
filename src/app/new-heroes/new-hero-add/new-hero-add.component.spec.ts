import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeroAddComponent } from './new-hero-add.component';

describe('NewHeroAddComponent', () => {
  let component: NewHeroAddComponent;
  let fixture: ComponentFixture<NewHeroAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHeroAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeroAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
