import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeleteModalComponent } from './client-delete-modal.component';

describe('ClientDeleteModalComponent', () => {
  let component: ClientDeleteModalComponent;
  let fixture: ComponentFixture<ClientDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDeleteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
