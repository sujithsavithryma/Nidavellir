import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavanComponent } from './ravan.component';

describe('RavanComponent', () => {
  let component: RavanComponent;
  let fixture: ComponentFixture<RavanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
