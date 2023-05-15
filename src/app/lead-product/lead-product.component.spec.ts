import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadProductComponent } from './lead-product.component';

describe('LeadProductComponent', () => {
  let component: LeadProductComponent;
  let fixture: ComponentFixture<LeadProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
