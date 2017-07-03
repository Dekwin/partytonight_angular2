import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTransactionsTableComponent } from './event-transactions-table.component';

describe('EventTransactionsTableComponent', () => {
  let component: EventTransactionsTableComponent;
  let fixture: ComponentFixture<EventTransactionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTransactionsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
