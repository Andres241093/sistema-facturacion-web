import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDeleteModalComponent } from './bill-delete-modal.component';

describe('BillDeleteModalComponent', () => {
  let component: BillDeleteModalComponent;
  let fixture: ComponentFixture<BillDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
