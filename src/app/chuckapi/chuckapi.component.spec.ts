import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckapiComponent } from './chuckapi.component';

describe('ChuckapiComponent', () => {
  let component: ChuckapiComponent;
  let fixture: ComponentFixture<ChuckapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
