import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSettingsComponent } from './commercial-settings.component';

describe('CommercialSettingsComponent', () => {
  let component: CommercialSettingsComponent;
  let fixture: ComponentFixture<CommercialSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
