import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketWrapperComponent } from './market-wrapper.component';

describe('MarketWrapperComponent', () => {
  let component: MarketWrapperComponent;
  let fixture: ComponentFixture<MarketWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
