import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResisteruserComponent } from './resisteruser.component';

describe('ResisteruserComponent', () => {
  let component: ResisteruserComponent;
  let fixture: ComponentFixture<ResisteruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResisteruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResisteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
