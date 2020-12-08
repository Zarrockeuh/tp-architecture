import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyReservedComponent } from './already-reserved.component';

describe('AlreadyReservedComponent', () => {
  let component: AlreadyReservedComponent;
  let fixture: ComponentFixture<AlreadyReservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlreadyReservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
