import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtplistComponent } from './ctplist.component';

describe('CtplistComponent', () => {
  let component: CtplistComponent;
  let fixture: ComponentFixture<CtplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtplistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
