import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtcformComponent } from './ptcform.component';

describe('PtcformComponent', () => {
  let component: PtcformComponent;
  let fixture: ComponentFixture<PtcformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PtcformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PtcformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
