import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCardComponent } from './clients-card.component';

describe('ClientsCardComponent', () => {
  let component: ClientsCardComponent;
  let fixture: ComponentFixture<ClientsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
