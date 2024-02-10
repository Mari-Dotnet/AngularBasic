import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtpfromComponent } from './ctpfrom.component';

describe('CtpfromComponent', () => {
  let component: CtpfromComponent;
  let fixture: ComponentFixture<CtpfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtpfromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtpfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
