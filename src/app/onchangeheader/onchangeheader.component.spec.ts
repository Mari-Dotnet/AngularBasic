import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeheaderComponent } from './onchangeheader.component';

describe('OnchangeheaderComponent', () => {
  let component: OnchangeheaderComponent;
  let fixture: ComponentFixture<OnchangeheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnchangeheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnchangeheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
