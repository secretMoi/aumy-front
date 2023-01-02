import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSwitchDimmerComponent } from './card-switch-dimmer.component';

describe('CardSwitchDimmerComponent', () => {
  let component: CardSwitchDimmerComponent;
  let fixture: ComponentFixture<CardSwitchDimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSwitchDimmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSwitchDimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
