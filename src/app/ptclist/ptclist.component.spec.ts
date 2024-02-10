import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtclistComponent } from './ptclist.component';

describe('PtclistComponent', () => {
  let component: PtclistComponent;
  let fixture: ComponentFixture<PtclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PtclistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PtclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
