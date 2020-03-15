import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencydetailsComponent } from './residencydetails.component';

describe('ResidencydetailsComponent', () => {
  let component: ResidencydetailsComponent;
  let fixture: ComponentFixture<ResidencydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidencydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
