import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneldetailsComponent } from './paneldetails.component';

describe('PaneldetailsComponent', () => {
  let component: PaneldetailsComponent;
  let fixture: ComponentFixture<PaneldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
