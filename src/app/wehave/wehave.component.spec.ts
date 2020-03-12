import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WehaveComponent } from './wehave.component';

describe('WehaveComponent', () => {
  let component: WehaveComponent;
  let fixture: ComponentFixture<WehaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WehaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WehaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
