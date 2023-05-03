import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestSectionComponent } from './newest-section.component';

describe('NewestSectionComponent', () => {
  let component: NewestSectionComponent;
  let fixture: ComponentFixture<NewestSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
