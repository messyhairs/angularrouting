import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoweComponent } from './whowe.component';

describe('WhoweComponent', () => {
  let component: WhoweComponent;
  let fixture: ComponentFixture<WhoweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
