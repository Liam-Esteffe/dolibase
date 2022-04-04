import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronsStateComponent } from './crons-state.component';

describe('CronsStateComponent', () => {
  let component: CronsStateComponent;
  let fixture: ComponentFixture<CronsStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronsStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
