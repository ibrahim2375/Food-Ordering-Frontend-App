import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestItemComponent } from './newest-item.component';

describe('NewestItemComponent', () => {
  let component: NewestItemComponent;
  let fixture: ComponentFixture<NewestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
