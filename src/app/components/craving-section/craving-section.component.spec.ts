import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CravingSectionComponent } from './craving-section.component';

describe('CravingSectionComponent', () => {
  let component: CravingSectionComponent;
  let fixture: ComponentFixture<CravingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CravingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CravingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
