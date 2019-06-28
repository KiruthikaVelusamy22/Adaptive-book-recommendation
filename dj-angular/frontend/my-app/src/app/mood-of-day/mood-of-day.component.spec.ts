import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodOfDayComponent } from './mood-of-day.component';

describe('MoodOfDayComponent', () => {
  let component: MoodOfDayComponent;
  let fixture: ComponentFixture<MoodOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
