import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronsDaterComponent } from './crons-dater.component';

describe('CronsDaterComponent', () => {
  let component: CronsDaterComponent;
  let fixture: ComponentFixture<CronsDaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronsDaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronsDaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
